import { Product } from '../models';
import { ProductModel } from '../../db';
import { Service } from '.';

export class ProductsService extends Service {
  constructor() {
    super(new ProductModel(), Product)
  }
}