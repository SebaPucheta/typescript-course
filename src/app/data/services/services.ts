import { Model } from '../models';
import { ServiceInterface } from './service.interfaces';

export class Service implements ServiceInterface {
  private bdModel;
  private objModel;

  constructor(bdModel, objModel) {
    this.bdModel = bdModel
    this.objModel = objModel
  }

  async getAll(): Promise<Array<Model>> {
    const items: Array<any> = await this.bdModel.find()
    return items.map(item => new (this.objModel)(item))
  };

  async get(id: string): Promise<Model> {
    const item: any = await this.bdModel.findById(id)
    return new (this.objModel)(item)
  }

  async create(newItem: Model): Promise<Model> {
    const item: any = await this.bdModel.save(newItem)
    return new (this.objModel)(item)
  }

  async update(id: string, change: Model): Promise<Model> {
    const item: any = await this.bdModel.update(id, change)
    return new (this.objModel)(item)
  }

  delete(id: string): Promise<void> {
    return this.bdModel.dalete(id)
  }
}