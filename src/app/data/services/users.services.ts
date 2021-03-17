import { User } from '../models';
import { UserModel } from '../../db';
import { Service } from './services';

export class UsersService extends Service {
  constructor() {
    super(new UserModel(), User)
  }
}