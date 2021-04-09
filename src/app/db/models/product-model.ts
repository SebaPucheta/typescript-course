import * as mongoose from 'mongoose'
import { CustomModel } from './model'

const ProductSchema: mongoose.Schema = new mongoose.Schema({
  name: String,
  description: String
});

const productModel = mongoose.model('Product', ProductSchema);

export class ProductModel extends CustomModel {
  constructor() {
    super(productModel)
  }
}

