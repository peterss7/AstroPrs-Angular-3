import { User } from "./user.model";

export class Request {
  constructor(
    public id: number = 0,
    public description: string = '',
    public justification: string = '',
    public rejectionReason: string = '',
    public deliveryMode: string = '',
    public submittedDate: string = '',
    public dateNeeded: string = '',
    public status: string = '',
    public total: number = 0.0,
    public user : User = new User()
  ){}
}
