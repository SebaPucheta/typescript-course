import { User } from '../models';
import { UserModel } from '../../db';
import { Service } from './services';
import { Notifier, WebhookFactory } from '../notifiers';

export class UsersService extends Service {
  constructor() {
    super(new UserModel(), User)
  }

  async update(id: string, change: User): Promise<User> {
    const user: User = (await super.update(id, change)) as User
    user.webhooks.forEach(webhook => {
      const webhookObj: Notifier = WebhookFactory.getWebhook(webhook.type)
      webhookObj.notify()
    })
    return user
  }
}