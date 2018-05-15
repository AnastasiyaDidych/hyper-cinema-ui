import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  collumns: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rows: number[] = [1,2,3];
  halls: Array<Hall> = [];
  hall: Hall = Object();
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getHall();
    // this.getHalls();
  }

  public getHalls() {
    this.httpService.getAll().subscribe(data => {
      this.halls = data;

    });
  }

  public getHall() {
    this.httpService.getOne('6').subscribe(data => {
      this.hall = data;
    });
  }
}


export class Hall {
  name: string;
  capacity: number;
  type: string;
  tech: string;
  seats: Array<Seat>;
}
export class Seat {
  id: number;
  number: number;
  row: number;
  type: string
}
