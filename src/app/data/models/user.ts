import { Model } from './model';
import { Validatable, Validator, ValidatorError } from '../../common';

export enum WebhookType {
  HTTP = 'http',
  SMS = 'sms',
  EMAIL = 'email'
}

export interface Webhook {
  type: WebhookType;
  data: any;
}

export class User extends Model implements Validatable {
  public firstName: string;
  public lastName: string;
  public email: string;
  public webhooks: Array<Webhook>;

  constructor(data: any) {
    super(data.id);
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.webhooks = data.webhooks;
  }

  validate(): Array<ValidatorError> {
    return Validator.validate(this, User.MODEL_CONSTRAINTS);
  }

  isValid() { return this.validate() === undefined; }

  toJSON(): any {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
  }

  static readonly MODEL_CONSTRAINTS: any = {
    firstName: {
      required: true,
      notNull: true,
      length: {
        minimum: 2,
        message: 'must be at least 2 characters.'
      }
    },
    lastName: {
      required: true,
      notNull: true
    },
    email: {
      required: true,
      notNull: true,
      email: {
        message: 'must be a valid email address.'
      }
    },
    webhooks: {
      required: true,
      notNull: true
    }
  };
}

////////////////////
