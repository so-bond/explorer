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
  return dt.toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'medium'})
}
export function toDate(dt: Date): string {
  return dt.toLocaleDateString('en-US', {dateStyle: 'long', timeZone: 'UTC'})
}
export function toTime(dt: Date): string {
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