import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user.component';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

    constructor(private http: HttpClient){}

    private userUrl = 'http://localhost:1305/users';

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.userUrl);
    }

}

