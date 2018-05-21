import { Component, OnInit } from '@angular/core';
import { Seat } from '../model/seat.model';
import { Session } from '../../sessions/session-edit/session.model';
import { sessionInStorage } from '../../sessions/display-session/display-session.component';
import { HallService } from '../hall.service';
import { Hall } from '../model/hall.model';

export const hallIdInStorage = "hallIdInStorage";

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit {

  constructor(private hallService: HallService) { }

  ngOnInit() {
    this.getHalls();
  }

  halls: Array<Hall> = [];
  hall: Hall = Object();

  public getHalls() {
    this.hallService.getHalls().subscribe(data => {
      this.halls = data;
    });
  }

  public throwHallIdToStorage(hall_id: number){
    localStorage.setItem(hallIdInStorage, JSON.stringify(hall_id));
    console.log("hall_id send to the local storage");
  }

}
