export class userInfo {
  public get userClass(): number {
    return this._userClass;
  }
  public set userClass(value: number) {
    this._userClass = value;
  }
  public get userPassword(): string {
    return this._userPassword;
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  public get userEmail(): string {
    return this._userEmail;
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }
  constructor(
    private _userName: string,
    private _userEmail: string,
    private _userPassword: string,
    private _userClass: number
  ) { }

  
  getAllParam(): string[] {
    return ["userName", "userName ", "userPassword", "userClass"];
  }
  toString(): string {
    return "{" +
      ", userName='" + this.userName + '\'' +
      ", userPassword='" + this.userPassword + '\'' +
      ", userEmail='" + this.userEmail + '\'' +
      ", userClass=" + this.userClass +
      '}';
  }


}