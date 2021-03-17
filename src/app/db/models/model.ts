import { Model } from 'mongoose'

export class CustomModel {
  private model: Model<any>

  constructor (model: Model<any>) {
    this.model = model;
  }

  async save(item: any): Promise<any> {
    let newItem = new (this.model)(item);
    newItem = await newItem.save(item);
    return newItem;
  } 

  async findById(_id: String): Promise<any> {
    const item = await this.model.findOne({ _id });
    return item;
  }

  async find(): Promise<Array<any>> {
    const items = await this.model.find();
    return items;
  }

  async delete(_id: String): Promise<any> {
    const items = await this.model.deleteOne({ _id });
    return items;
  }

  async update(_id: String, item: any): Promise<any> {
    const updatedItem = await this.model.updateOne({ _id }, item);
    return updatedItem;
  }
}
