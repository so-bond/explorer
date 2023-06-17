

export enum RegisterStatus {
  Draft, Ready, Issued, Repaid, Frozen
}

export enum TradeStatus {
  Draft, Pending, Rejected, Accepted, Executed, Paid
}

export interface RegisterId {
  address: string;
  name: string;
  isin: string;
  status: RegisterStatus;
}

export interface RegisterDetails extends RegisterId {
  expectedSupply: number;
  currentSupply: number;
  currency: string;
  unitValue: number;
  couponRate: number;
  creationDate: Date;
  issuanceDate: Date;
  maturityDate: Date;
  couponDates: Date[];
  cutOffTime: Date;
  currentSnapshotTimestamp: Date;
  currentCouponDate: Date;
}

export interface TradeBase {
  address: string;
  register?: string;
  codehash?: string;
  approvedInRegister?: boolean;
  status: TradeStatus;
  buyer: string;
  seller: string;
  quantity: number;
}

export interface TradeDetails extends TradeBase {
  price: number;
  paymentId: string;
}
export interface DecodedEvent {
  id: string;
  blockNumber: number;
  logIndex: number;
  txHash: string;
  eventName: string;
  params: {[key: string]: any};
  display: string;
}

export interface InvestorInfo {
  address: string;
  custodian: string;
  allowed: boolean;
  balance: number;
}