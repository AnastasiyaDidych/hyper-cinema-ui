import { Component, OnInit } from '@angular/core';
import { Seat } from '../model/seat.model';
import { Session } from '../../sessions/session-edit/session.model';
import { sessionInStorage } from '../../sessions/display-session/display-session.component';
import { HallService } from '../hall.service';
import { Hall } from '../model/hall.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HallCreateAlertComponent } from './hall-create-alert/hall-create-alert.component';
import { FormGroup } from '@angular/forms';

export const hallIdInStorage = "hallIdInStorage";

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit {

  constructor(private hallService: HallService,
    private dialog: MatDialog, ) { }

  ngOnInit() {
    this.getHalls();
  }
  hallForm: FormGroup;
  halls: Array<Hall> = [];
  hall: Hall = Object();

  public getHalls() {
    this.hallService.getHalls().subscribe(data => {
      this.halls = data;
    });
  }

  public throwHallIdToStorage(hall_id: number) {
    localStorage.setItem(hallIdInStorage, JSON.stringify(hall_id));
  }

  public openDialog() {
    let dialogRef = this.dialog.open(HallCreateAlertComponent, {
      width: '600px',
      data: { capacity: this.hall.capacity, name: this.hall.name }
    });
  }
}
