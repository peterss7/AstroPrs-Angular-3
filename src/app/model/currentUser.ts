export class CurrentUser {

  private id: number = 0;
  private firstname: string = '';
  private lastname: string = '';
  private isReviewer: boolean = false;
  private isAdmin: boolean = false;


  constructor(){}

  public reset(){
    this.id = 0;
    this.firstname = '';
    this.lastname = '';
    this.isReviewer = false;
    this.isAdmin = false;
  }

  public getId(): number {
    return this.id;
  }



  public getIsReviewer(): boolean{
    return this.isReviewer;
  }

  public getIsAdmin(): boolean{
      return this.isAdmin;
  }
  public getFirstname(): string {
    return this.firstname;
  }

  public getLast(): string {
    return this.firstname;
  }

}

