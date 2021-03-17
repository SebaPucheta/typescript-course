import { Model } from './model';
import { Validatable, Validator, ValidatorError } from '../../common';

export class Product extends Model implements Validatable {
  public name: string;
  public description: string;

  constructor(data: any) {
    super(data.id);
    this.name = data.name;
    this.description = data.description;
  }

  validate(): Array<ValidatorError> {
    return Validator.validate(this, Product.MODEL_CONSTRAINTS);
  }

  isValid() { return this.validate() === undefined; }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description
    };
  }

  static readonly MODEL_CONSTRAINTS: any = {
    name: {
      required: true,
      notNull: true,
      length: {
        minimum: 2,
        message: 'must be at least 2 characters.'
      }
    },
    description: {
      required: true,
      notNull: true
    }
  };
}

////////////////////

