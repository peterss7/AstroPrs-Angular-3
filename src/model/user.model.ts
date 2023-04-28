export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstname: string,
    public lastname: string,
    public phone: string,
    public email: string,
    public isReviewer: boolean,
    public isAdmin: boolean,
    public editing: boolean
  ) {}
}
