import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Session } from '../session-edit/session.model'
import { environment } from '../../../../environments/environment';

const SESSION_API_URL = environment.apiUrl + '/sessions';

@Injectable()
export class SessionService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(SESSION_API_URL);
  }

  getSchedule(): Observable<any> {
    return this.http.get(SESSION_API_URL + "/schedule");
  }
  public genetateForDay(id: number) {
    return this.http.post(SESSION_API_URL + "/generateday/" + id, id);
  }

  get(id: number): Observable<any> {
    return this.http.get(SESSION_API_URL + '/' + id);
  }

  public createSession(session) {
    return this.http.post<Session>(SESSION_API_URL, session);
  }

  public deleteSession(id: number) {
    return this.http.delete(SESSION_API_URL + "/" + id);
  }
}