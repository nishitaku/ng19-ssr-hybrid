import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    // SSRでは認証しないのでモックする
    {
      provide: AuthService,
      useValue: {
        isAuthenticated$: of(),
      },
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
