import { Controller, Get } from '@nestjs/common';
import { FeedbackEmailBuilderService } from './feedback-email-builder.service';

@Controller('feedback-email-builder')
export class FeedbackEmailBuilderController {
  constructor(private feedbackEmailBuilderService: FeedbackEmailBuilderService) {}

  @Get('demo/requested')
  async requested() {
    const receiverEmail = 'john.doe@gmail.com';
    const message =
      'Bonjour ! J’ai bientôt mon entretien annuel et afin de le préparer j’aimerais te demander ton avis sur ce que je fais bien et ce que je pourrais améliorer. Merci par avance.';
    const tokenId = 'tokenId_12345azerty';
    return (await this.feedbackEmailBuilderService.requested(receiverEmail, message, tokenId)).html;
  }

  @Get('demo/given')
  async given() {
    const senderEmail = 'john.doe@zenika.com';
    const feedbackId = 'feedbackId_12345azerty';
    return (await this.feedbackEmailBuilderService.given(senderEmail, feedbackId)).html;
  }
}
