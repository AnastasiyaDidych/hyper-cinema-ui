import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const USER_API_URL = environment.apiUrl + '/users';

@Injectable()
export class UserService {


    constructor(private http: HttpClient) { }


    getCurrentUser(): Observable<User> {
        return this.http.get<User>(USER_API_URL + '/me');
    }


    getUser(id: number): Observable<User> {
        return this.http.get<User>(USER_API_URL + '/' + id);
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(USER_API_URL);
    }

    postUser(user: User): Observable<User> {
        return this.http.post<User>(USER_API_URL, user, httpOptions);
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(USER_API_URL, user, httpOptions);
    }

}