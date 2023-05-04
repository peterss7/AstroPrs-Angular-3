import { Vendor } from "./vendor.model";

export class Product {
  constructor(
    public id: number,
    public partNumber: string,
    public name: string,
    public price: number,
    public unit: string,
    public photopath: string,
    public vendor: Vendor,
  ) {}
}
