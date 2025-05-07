import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAuth0({
      domain: 'dev-y1f2j8to8a3ssqwx.us.auth0.com',
      clientId: 'qss8x41izGPMuypR3tftIibeQCc4QUbB',
      authorizationParams: {
        redirect_uri:
          globalThis.window !== undefined
            ? `${window.location.origin}/setting`
            : undefined,
      },
    }),
  ],
};
