import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (request.url.startsWith(API_URL) && this.authService.isAuthenticated) {
      request = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.authService.token) });
    }
    return next.handle(request).catch(
      error => {
        if (error.status === 401 || error.status === 403) {
          this.authService.logout();
        }
        return Observable.throw(error);
      }
    );
  }

}
