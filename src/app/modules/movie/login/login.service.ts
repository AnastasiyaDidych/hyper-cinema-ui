import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    constructor(private http : HttpClient) {}

    public URLAuth = '//localhost:1305/auth/login';
    attemptAuth(email : string, password : string) : Observable<any>{
        const credentials = {email : email, password : password};
        console.log(credentials);
        return this.http.post(this.URLAuth,credentials);
    }
}