import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { GlobalErrorHandler } from './core/interceptors/global-error-handler.interceptor';
import { isoDateInterceptor } from './core/interceptors/iso-date.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding()
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor, isoDateInterceptor]),
      withInterceptorsFromDi()
    ),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-bottom-left',
      progressBar: true,
      closeButton: true,
    }),
    importProvidersFrom(BrowserModule),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
};
