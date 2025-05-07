import { isPlatformServer } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs';

export const settingGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  // SSRでは認証しないのでスキップする
  if (isPlatformServer(platformId)) {
    return true;
  }

  return auth.isAuthenticated$.pipe(
    tap((loggedIn) => {
      if (!loggedIn) {
        auth.loginWithRedirect({
          appState: { target: state.url },
        });
      }
    })
  );
};
