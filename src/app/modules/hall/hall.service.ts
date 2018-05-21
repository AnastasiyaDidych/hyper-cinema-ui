import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



const hostUrl = '//localhost:1305/halls';
@Injectable()
export class HallService {

  constructor(private http: HttpClient) {
  }

  getHalls(): Observable<any> {
    return this.http.get(hostUrl);
  }

  getHall(hall_id :number): Observable<any>{
      return this.http.get(hostUrl + '/' + hall_id);
  }
}