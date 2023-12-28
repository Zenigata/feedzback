import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, catchError, first, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../shared/auth/auth.service';
import { FeedbackService } from '../../shared/feedback/feedback.service';
import { GiveRequestedFeedbackData, RequestWithToken } from './give-requested-feedback.types';

export const giveRequestedFeedbackGuard = (route: ActivatedRouteSnapshot): Observable<boolean> => {
  const authService = inject(AuthService);
  const feedbackService = inject(FeedbackService);
  const router = inject(Router);

  return authService.isSignedIn$.pipe(
    first(),
    switchMap((isSignedIn) => {
      const { token } = route.params;
      return feedbackService.checkRequest(token).pipe(
        tap((request) => {
          const requestWithToken: RequestWithToken = { ...request, token };
          route.data = { requestWithToken } satisfies GiveRequestedFeedbackData;
        }),
        switchMap(() => {
          if (isSignedIn) {
            return of(true);
          }
          return authService.signInAnonymously();
        }),
        catchError(() => {
          router.navigate(['/not-found']);
          return EMPTY;
        }),
      );
    }),
  );
};
