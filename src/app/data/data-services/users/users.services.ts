import { User } from '../../models';
import { ServiceInterface } from './service.interfaces';
import { UserModel } from '../../../db';

export class UsersService implements ServiceInterface {
  private userModel;

  constructor() {
    this.userModel = new UserModel()
  }

  async getAll(): Promise<Array<User>> {
    const users: Array<any> = await this.userModel.find()
    return users.map(user => new User(user))
  };

  async get(id: string): Promise<User> {
    const user: any = await this.userModel.findById(id)
    return new User(user)
  }

  async create(newUser: User): Promise<User> {
    const user: any = await this.userModel.save(newUser)
    return new User(user)
  }

  async update(id: string, change: User): Promise<User> {
    const user: any = await this.userModel.update(id, change)
    return new User(user)
  }

  delete(id: string): Promise<void> {
    return this.userModel.dalete(id)
  }
}