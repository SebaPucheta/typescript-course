import * as mongoose from 'mongoose'
import { CustomModel } from './model'

const UserSchema: mongoose.Schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  webhooks: [{
    type: mongoose.Schema.Types.Mixed
  }]
});

const userModel = mongoose.model('User', UserSchema);

export class UserModel extends CustomModel {
  constructor() {
    super(userModel)
  }
}

