export class User {
  constructor(
    public id: number = 0,
    public username: string = '',
    public password: string = '',
    public firstname: string = '',
    public lastname: string = '',
    public phone: string = '',
    public email: string = '',
    public isReviewer: boolean = false,
    public isAdmin: boolean = false,
  ) {}


  public setIsReviewer(isReviewer: boolean){
    this.isReviewer = isReviewer;
  }
  public setIsAdmin(isAdmin: boolean){
    this.isAdmin = isAdmin;
  }

}
