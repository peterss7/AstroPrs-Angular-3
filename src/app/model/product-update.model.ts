export class ProductUpdate {
  constructor(
    public id: number = 0,
    public partNumber: string = '',
    public name: string = '',
    public price: number = 0,
    public unit: string = '',
    public photopath: string = '',
    public vendorId: number = 0
  ) {}
}
