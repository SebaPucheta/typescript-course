import { UsersService } from './data-services';

export class AppDataServices {
  public usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }
}