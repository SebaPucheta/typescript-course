import { UsersService, ProductsService } from './services';

export class AppDataServices {
  public usersService: UsersService;
  public productsService: ProductsService;

  constructor() {
    this.usersService = new UsersService();
    this.productsService = new ProductsService();
  }
}