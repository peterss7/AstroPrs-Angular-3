export class Request {
  constructor(
    public id: number,
    public description: string,
    public justification: string,
    public  rejectionReason: string,
    public deliveryMode: string,
    public submittedDate: string,
    public dateNeeded: string,
    public status: string,
    public userId: number
  ){}
}
