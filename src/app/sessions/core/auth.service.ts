import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:1305/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(email: string, password: string): Observable<any> {
    const credentials = {email: email, password: password};
    console.log('attempAuth ::');
    return this.http.post<any>('http://localhost:1305/auth/login', credentials);
  }

}
