import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DisplaySessionComponent } from '../sessions/display-session/display-session.component';
import { Seat } from './model/seat.model';


const hostUrl = 'http://localhost:1305/seats';
@Injectable()
export class SeatService {

  constructor(private http: HttpClient) {
  }


  getSeat(seat_id: number): Observable<any> {
    return this.http.get(hostUrl + '/' + seat_id);
  }

  putSeat(seat: Seat): void {
    console.log(hostUrl +'/' +  seat.id);
    this.http.put<Seat>(hostUrl + '/' + seat.id, seat).subscribe(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}