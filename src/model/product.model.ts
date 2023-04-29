export class Product {
  constructor(
    public id: number,
    public partNumber: string,
    public name: string,
    public price: number,
    public unit: string,
    public photopath: string,
    public vendor: {
      id: number;
      name: string;
      code: string;
      address: string;
      city: string;
      state: string;
      zip: string;
      phone: string;
      email: string;
    },
  ) {}
}
