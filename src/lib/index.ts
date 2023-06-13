
import { EventData } from "web3-eth-contract";
import { EthProviderInterface } from "@saturn-chain/dlt-tx-data-functions";
import AllContracts from "./contracts";
import { Web3FunctionProvider } from "@saturn-chain/web3-functions";
import { EventFunction } from "@saturn-chain/smart-contract";
import { DecodedEvent, InvestorInfo, RegisterDetails, RegisterId } from "./types";
import { cleanReturnValues, hexToString } from "./utils";

export * from "./types";

const ContractNames = {
  Register: "Register",
  ITrade: "ITrade",
  ICoupon: "ICoupon",
  ICouponSnapshotManagement: "ICouponSnapshotManagement",
}

const ZeroAddress = "0x0000000000000000000000000000000000000000";

export function getRegisterContract() {
  return AllContracts.get(ContractNames.Register)
}

export function getTradeContract() {
  return AllContracts.get(ContractNames.ITrade)
}

export function getCouponContract() {
  return AllContracts.get(ContractNames.ICoupon)
}

export function getSnapshotContract() {
  return AllContracts.get(ContractNames.ICouponSnapshotManagement)
}


let _intfCache: EthProviderInterface|undefined = undefined;
function _intf(): EthProviderInterface|undefined {
  const w: any = window;
  if (!w.AppConfig || !w.AppConfig.rpcUrl) {
    return undefined;
  }
  const i = new Web3FunctionProvider(w.AppConfig.rpcUrl, () => Promise.resolve(ZeroAddress))
  return i;
}

const awaitingSteps= 10;
export async function awaitInitialization(timeout: number) {
  const w: any = window;
  if (!w.AppConfig) { // Not initialized yet
    if (timeout <= 0) throw new Error("Timeout waiting for initialization");
    console.log("Waiting for initialization...", timeout, "max");
    await new Promise((resolve) => setTimeout(resolve, awaitingSteps));
    await awaitInitialization(timeout - awaitingSteps);
  } else console.log("Initialization complete", timeout, "remaining");
  
}

function fromBlock(): number {
  const w: any = window;
  if (!w.AppConfig || !w.AppConfig.fromBlock) {
    return 0;
  }
  return w.AppConfig.fromBlock;
}

export function intf(): EthProviderInterface {
  if (!_intfCache) {
    const i = _intf();
    if (!i) {
      throw new Error("No EthProviderInterface available");
    }
    _intfCache = i;
  }
  return _intfCache;
}

async function loadEvents(event: EventFunction, fromBlock: number, filter: any): Promise<EventData[]> {
  const recv = event(intf().get({fromBlock}), filter);
  const events: EventData[] = [];
  return new Promise((resolve, reject)=>{
    recv.on("log", (log) => events.push(log));
    recv.on("error", (err) => reject(err));
    recv.on("completed", () => resolve(events));
  })
}


export async function listRegisters(): Promise<RegisterId[]> {
  const Register = getRegisterContract();
  const events: EventData[] = await loadEvents(Register.events.RegisterStatusChanged, fromBlock(), {});

  const map: {[key: string]: RegisterId} = {};
  for (const e of events) {
    map[e.address] = {
      address: e.address,
      status: Number.parseInt(e.returnValues.status),
      name: e.returnValues.name,
      isin: e.returnValues.isin,
    }
  }
  return Object.values(map);
}

export async function getRegisterDetails(address: string): Promise<RegisterDetails> {
  const register = getRegisterContract().at(address);
  const snapshot = getSnapshotContract().at(address);
  const [status, data, totalSupply, currentTimestamp, currentCoupon] = await Promise.all([
    register.status(intf().call()),
    register.getBondData(intf().call()),
    register.totalSupply(intf().call()),
    snapshot.currentSnapshotDatetime(intf().call()),
    snapshot.currentCouponDate(intf().call()),
  ]);

  return {
    address,
    status: Number.parseInt(status),
    name: data.name,
    isin: data.isin,
    expectedSupply: Number.parseInt(data.expectedSupply),
    currentSupply: Number.parseInt(totalSupply),
    currency: hexToString(data.currency),
    unitValue: Number.parseInt(data.unitValue),
    couponRate: Number.parseInt(data.couponRate) / 10000,
    creationDate: new Date(Number.parseInt(data.creationDate) * 1000),
    issuanceDate: new Date(Number.parseInt(data.issuanceDate) * 1000),
    maturityDate: new Date(Number.parseInt(data.maturityDate) * 1000),
    couponDates: data.couponDates.map((d: string) => new Date(Number.parseInt(d) * 1000)),
    cutOffTime: new Date(Number.parseInt(data.cutOffTime) * 1000),
    currentSnapshotTimestamp: new Date(Number.parseInt(currentTimestamp) * 1000),
    currentCouponDate: new Date(Number.parseInt(currentCoupon) * 1000),
  }
}

export async function loadEventsForRegister(address: string): Promise<DecodedEvent[]> {
  const register = getRegisterContract().at(address);
  const events: EventData[] = await loadEvents(register.allEvents, fromBlock(), {});
  
  
  function objToDisplay(obj: any): string {
    return Object.keys(obj).map((k) => k + ": " + obj[k]).join(", ");
  }
  return events.map((e) => ({
    id: `${e.blockNumber}-${e.logIndex}`,
    blockNumber: e.blockNumber,
    logIndex: e.logIndex,
    txHash: e.transactionHash,
    eventName: e.event,
    params: cleanReturnValues(e.returnValues),
    display: e.event + "(" + objToDisplay(cleanReturnValues(e.returnValues))+")",
  }));
}

export async function getRegisterInvestors(address: string): Promise<InvestorInfo[]> {
  const register = getRegisterContract().at(address);
  const investorAddresses = await register.getAllInvestors(intf().call());
  const investors = await Promise.all(investorAddresses.map(async (addr: string) => {
    const [custodian, allowed, balance] = await Promise.all([
      register.investorCustodian(intf().call(), addr),
      register.investorsAllowed(intf().call(), addr),
      register.balanceOf(intf().call(), addr),
    ]);
    return {
      address: addr,
      custodian,
      allowed,
      balance: Number.parseInt(balance),
    }
  }));
  return investors;
}