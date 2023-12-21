import { DatePipe } from '@angular/common';
import { Component, HostBinding, Input, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AllowedEmailDomainsPipe } from '../../form/allowed-email-domains';
import { FeedbackService } from '../feedback.service';
import { FeedbackRequest, FeedbackType } from '../feedback.types';

@Component({
  selector: 'app-pending-feedback',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatIconModule, AllowedEmailDomainsPipe],
  templateUrl: './pending-feedback.component.html',
  styleUrl: './pending-feedback.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PendingFeedbackComponent {
  @HostBinding('class.app-pending-feedback') hasCss = true;

  @Input({ required: true }) feedback!: FeedbackRequest;

  @Input({ required: true }) type!: FeedbackType;

  protected feedbackType = FeedbackType;

  protected getColleagueEmail(feedback: FeedbackRequest): string | undefined {
    return this.type === this.feedbackType.sentRequest ? feedback.giverEmail : feedback.receiverEmail;
  }

  private feedbackService = inject(FeedbackService);

  private router = inject(Router);

  protected giveNow() {
    this.feedbackService
      .revealRequestTokenId(this.feedback.id)
      .subscribe(({ token }) => this.router.navigate(['/give'], { queryParams: { token } }));
  }
}
