import { UserType } from '../enums/user-type';
import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('asd@asd.asd', 'asd', UserType.Tenant)).toBeTruthy();
  });
});
