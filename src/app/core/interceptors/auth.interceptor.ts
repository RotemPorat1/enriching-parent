import {
  HttpRequest,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  // Adding credentials to every outgoing http call
  request = request.clone({
    withCredentials: true,
  });

  return next(request);
};
