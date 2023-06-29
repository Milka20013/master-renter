import { UserType } from '../enums/user-type';
import { Token } from './token';

describe('Token', () => {
  it('should create an instance', () => {
    expect(new Token('asd', UserType.Tenant)).toBeTruthy();
  });
});
