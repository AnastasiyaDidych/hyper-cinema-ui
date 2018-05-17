import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Session} from '../session-edit/session.model'

@Injectable()
export class SessionService {

  public API = '//localhost:1305/sessions';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> { 
    return this.http.get(this.API);
  }

  getSchedule(): Observable<any> { 
    return this.http.get(this.API+"/schedule");
  }

  get(id: number):Observable<any> {
    return this.http.get(this.API + '/'+id);
  }

  public createSession(session) {
    return this.http.post<Session>(this.API, session);
  }

  public deleteSession(id:number) {
    return this.http.delete(this.API + "/"+ id);
  }
}