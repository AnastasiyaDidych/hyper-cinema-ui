import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DisplaySessionComponent } from '../sessions/display-session/display-session.component';


const hostUrl = '//localhost:1305/halls';
@Injectable()
export class HallService {

  //, private session: DisplaySessionComponent
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(hostUrl);
  }

  getOne(hall_id :number): Observable<any>{
    //must me a this.session.hallId
      return this.http.get(hostUrl + '/' + hall_id);
  }
}