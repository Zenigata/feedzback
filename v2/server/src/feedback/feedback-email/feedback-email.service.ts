import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailService } from 'src/core/email';
import { AppConfig } from '../../config';
import { FeedbackEmailBuilderService } from '../feedback-email-builder/feedback-email-builder.service';
import { EMAIL_DEFAULT_FROM_FIELD, EMAIL_DEV_TO_FIELD } from './feedback-email.config';

@Injectable()
export class FeedbackEmailService {
  private appEnv = this.configService.get('appEnv', { infer: true })!;

  constructor(
    private configService: ConfigService<AppConfig>,
    private feedbackEmailBuilderService: FeedbackEmailBuilderService,
    private emailService: EmailService,
  ) {}

  async sendFeedbackRequest(senderEmail: string, receiverEmail: string, message: string, tokenId: string) {
    const { subject, html } = await this.feedbackEmailBuilderService.requested(receiverEmail, message, tokenId);

    return this.emailService.send({
      from: EMAIL_DEFAULT_FROM_FIELD,
      to: this.getToField(senderEmail),
      subject,
      html,
    });
  }

  private getToField(toField: string | string[]): string | string[] {
    return this.appEnv === 'production' ? toField : EMAIL_DEV_TO_FIELD;
  }
}
