import { Component, OnInit } from '@angular/core';
import { Seat } from '../model/seat.model';
import { Session } from '../../sessions/session-edit/session.model';
import { sessionInStorage } from '../../sessions/display-session/display-session.component';
import { HallService, hallIdInStorage } from '../hall.service';
import { Hall } from '../model/hall.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HallCreateAlertComponent } from './hall-create-alert/hall-create-alert.component';
import { FormGroup } from '@angular/forms';
import { OneHallComponent } from '../one-hall/one-hall.component';
import { AuthService } from '../../../shared/security/auth.service';
import { HallDeleteAlertComponent } from './hall-delete-alert/hall-delete-alert.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private hallService: HallService,
    private dialog: MatDialog,
    private router: Router) { }

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
    this.openEditDialog();
  }

  public openCreateDialog() {
    let dialogRef = this.dialog.open(HallCreateAlertComponent, {
      width: '600px',
      data: { capacity: this.hall.capacity, name: this.hall.name }
    });
  }

  public openEditDialog() {
    let dialogRef = this.dialog.open(OneHallComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  }



  public removeHall(hall: Hall) {
    let dialogRef = this.dialog.open(HallDeleteAlertComponent, {
      width: '500px',
      data: { hall }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      window.location.reload();
    });
  }
}
