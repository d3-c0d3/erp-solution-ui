export interface Payable {
  _id?:string,
  accountName: string,
  slug: string,
  balance?: number,
  isSubAccount?: boolean,
  parentAccount?: false,
}
