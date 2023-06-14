export function hexToString(hex: string): string {
  if (hex.startsWith('0x')) hex = hex.slice(2);
  let str = '';
  for (let i = 0; i < hex.length; i+=2) {
    const code = parseInt(hex[i]+hex[i+1], 16);
    if (code === 0) break;
    str += String.fromCharCode(code);
  }
  return str;
}
// format number with n decimals and thousands separator
export function to1000s(v: number, decimals: number=0): string {
  return v.toLocaleString('en-US', {minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: true})
}

export function toDateTime(dt: Date): string {
  if (dt.valueOf() === 0) return 'N/A';
  return dt.toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'medium'})
}
export function toDate(dt: Date): string {
  if (dt.valueOf() === 0) return 'N/A';
  return dt.toLocaleDateString('en-US', {dateStyle: 'long', timeZone: 'UTC'})
}
export function toTime(dt: Date): string {
  if (dt.valueOf() === 0) return 'N/A';
  // force the time to be used with the current date to avoid timezone issues
  const time = dt.valueOf() % (24*60*60*1000);
  const  date = Date.now();
  dt = new Date(date - (date % (24*60*60*1000)) + time);
  return dt.toLocaleTimeString('en-US', {timeStyle: 'medium', localeMatcher: 'lookup'})
}

export function cleanReturnValues(obj: any): any {
  const ret: any = {};
  for (const k of Object.keys(obj)) {
    if (Number.isInteger(Number.parseInt(k))) continue;
    ret[k] = obj[k];
  }
  return ret;
}

// function to force the size of a string by adding ... in the middle
export function ellipsis(str: string, size: number): string {
  if (str.length <= size) return str;
  if (size < 8) return str;
  return str.slice(0, size-4-3) + "..." + str.slice(-4);
}

export function ellipsisAddress(address: string): string {
  return ellipsis(address, 13);
}
export function ellipsisCodehash(hash: string): string {
  return ellipsis(hash, 17);
}