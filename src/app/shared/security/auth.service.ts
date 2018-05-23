import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from './credentials.model';
import { Token } from './token.model';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

const AUTH_API_URL = environment.apiUrl + '/auth';
const TOKEN_KEY = 'token';

@Injectable()
export class AuthService {

  private authenticated: boolean;
  private hasAdminRole: boolean;
  private hasManagerRole: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuth();
  }

  get isAuthenticated(): boolean {
    return this.authenticated;
  }

  get isAdmin(): boolean {
    return this.hasAdminRole;
  }

  get isManager(): boolean {
    return this.hasManagerRole;
  }

  get token(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  login(credentials: Credentials): Observable<Token> {
    return this.http.post<Token>(AUTH_API_URL + '/login', credentials)
      .do(res => this.setToken(res.token));
  }

  logout(): void {
    this.deleteToken();
    this.router.navigate(['/login']);
  }

  private setToken(token: string): void {
    window.localStorage.setItem(TOKEN_KEY, token);
    this.authenticated = true;
    this.checkRoles(token);
  }

  private deleteToken(): void {
    window.localStorage.removeItem(TOKEN_KEY);
    this.authenticated = false;
    this.hasAdminRole = false;
    this.hasManagerRole = false;
  }

  private checkAuth(): void {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      this.authenticated = true;
      this.checkRoles(token);
    }
  }

  private checkRoles(token): void {
    const encodedProfile = token.split('.')[1];
    const profile = JSON.parse(this.urlBase64Decode(encodedProfile));
    this.hasAdminRole = profile.roles.includes('ROLE_ADMIN');
    this.hasManagerRole = profile.roles.includes('ROLE_MANAGER');
  }

  private urlBase64Decode(str: string): string {
    let output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return window.atob(output);
  }

}
