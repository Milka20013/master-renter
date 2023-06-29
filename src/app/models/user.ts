import { UserType } from '../enums/user-type';

export class User {
  public email: string;
  public password: string;
  public type: UserType;
  constructor(email: string, password: string, type: UserType) {
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
