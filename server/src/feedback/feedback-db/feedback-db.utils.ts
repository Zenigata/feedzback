import { FeedbackRequestWithId, FeedbackWithId, TypedFeedbacks } from './feedback-db.types';

type AnyFeedbackWithId = FeedbackWithId | FeedbackRequestWithId;

export const isReceivedFeedback = (value: AnyFeedbackWithId, userEmail: string): value is FeedbackWithId =>
  value.status === 'given' && value.receiverEmail === userEmail;

export const isGivenFeedback = (value: AnyFeedbackWithId, userEmail: string): value is FeedbackWithId =>
  value.status === 'given' && value.senderEmail === userEmail;

export const isSentFeedbackRequest = (value: AnyFeedbackWithId, userEmail: string): value is FeedbackRequestWithId =>
  value.status === 'requested' && value.receiverEmail === userEmail;

export const isReceiveedFeedbackRequest = (
  value: AnyFeedbackWithId,
  userEmail: string,
): value is FeedbackRequestWithId => value.status === 'requested' && value.senderEmail === userEmail;

export const mapToTypedFeedbacks = (feedbacks: AnyFeedbackWithId[], userEmail: string): TypedFeedbacks =>
  feedbacks.reduce(
    (list, feedback) => {
      if (isReceivedFeedback(feedback, userEmail)) list.received.push(feedback);
      else if (isGivenFeedback(feedback, userEmail)) list.given.push(feedback);
      else if (isSentFeedbackRequest(feedback, userEmail)) list.sentRequest.push(feedback);
      else if (isReceiveedFeedbackRequest(feedback, userEmail)) list.receivedRequest.push(feedback);
      return list;
    },
    {
      received: [],
      given: [],
      sentRequest: [],
      receivedRequest: [],
    } satisfies TypedFeedbacks as TypedFeedbacks,
  );
