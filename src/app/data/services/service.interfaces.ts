import { Model } from '../../models';

export interface ServiceInterface {
  getAll(): Promise<Array<Model>>;
  create(item: Model): Promise<Model>;
  get(id: string): Promise<Model>;
  update(id: string, item: Model): Promise<Model>;
  delete(id: string): Promise<void>;
}