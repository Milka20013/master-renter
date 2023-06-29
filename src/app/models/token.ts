import { UserType } from '../enums/user-type';

export class Token {
  public guid: string;
  public type: UserType;

  public static Empty: Token = new Token('none', UserType.None);
  constructor(token: string, type: UserType) {
    this.guid = token;
    this.type = type;
  }
}
