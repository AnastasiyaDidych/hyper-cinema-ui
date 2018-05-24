import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Hall } from './model/hall.model';


const HALL_API_URL = environment.apiUrl + '/halls';
export const seatArrayInStorage = "storedSeats";

@Injectable()
export class HallService {

  constructor(private http: HttpClient) {
  }

  getHalls(): Observable<any> {
    return this.http.get(HALL_API_URL);
  }

  getHall(hall_id: number): Observable<any> {
    return this.http.get(HALL_API_URL + '/' + hall_id);
  }

  saveHall(hall: Hall){
    return this.http.post(HALL_API_URL, hall);
  }
  
}