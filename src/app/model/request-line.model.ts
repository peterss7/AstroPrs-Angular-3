import { Product } from "./product.model";
import { Request } from "./request.model";

export class RequestLine {
  constructor(
    public id: number = 0,
    public product : Product = new Product(),
    public quantity: number = 0,
    public request: Request = new Request()
  ){}
}
