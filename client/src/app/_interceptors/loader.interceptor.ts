import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoaderService } from '../_services/loader.service';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('hello');
    this.loaderService.startLoading();
    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.loaderService.stopLoading();
      })
    );
  }
}
