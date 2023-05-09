import { ProductService } from "../service/product.service";
import { VendorService } from "../service/vendor.service";
import { Vendor } from "./vendor.model";

export class Product {
  constructor(
    public id: number = 0,
    public partNumber: string = '',
    public name: string = '',
    public price: number = 0,
    public unit: string = '',
    public photopath: string = '',
    public vendor: Vendor = new Vendor()
  ) { }

}
