export class Credential {
  constructor(
    public username: string = '',
    public password: string = ''
  ) { }

  public setUsername(username: string): void {
    this.username = username;
  }
  public getUsername(): string {
    return this.username;
  }
  public setPassword(password: string): void {
    this.password = password;
  }
  public getPassword(): string {
    return this.password;
  }
}
