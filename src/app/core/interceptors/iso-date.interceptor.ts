import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

const ISO8601_DATE_REGEX =
  /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/;

export const isoDateInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map((event) => {
      if (event instanceof HttpResponse) {
        return event.clone({ body: convertIsoStringToDate(event.body) });
      }
      return event;
    }),
  );
};

// recursive function to map all object iso-strings to dates
function convertIsoStringToDate(obj: any) {
  // if obj is iso-string, parse
  if (ISO8601_DATE_REGEX.test(obj)) {
    return new Date(obj);
  }

  // recursive call for each object key
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = convertIsoStringToDate(obj[key]);
      }
    }
  }

  return obj;
}
