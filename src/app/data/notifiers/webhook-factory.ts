import { Notifier, HttpNotifier, EmailNotifier, SMSNotifier } from './';
import { WebhookType } from '../models'

export class WebhookFactory {
  public static getWebhook (type: string): Notifier {
    switch (type) {
      case WebhookType.HTTP:
        return new HttpNotifier()
      case WebhookType.SMS:
        return new SMSNotifier()
      case WebhookType.EMAIL:
        return new EmailNotifier()
    }
  }
}