import { Component, OnInit } from '@angular/core';
import { HallService } from '../hall.service'
import { Observable } from 'rxjs/Observable';
import { Hall } from '../hall.model';
import { Seat } from '../seat.model';
import { DisplaySessionComponent } from '../../sessions/display-session/display-session.component';
import { Ticket } from '../../ticket/ticket.component';

const seatArrayInStorage = "storedSeats";

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})


export class HallComponent implements OnInit {

  halls: Array<Hall> = [];
  hall: Hall = Object();
  seats: Array<Seat> = [];
  tickets: Array<Ticket> = [];

  selectedSeats: Seat[] = [];
  boughtSeats: Seat[] = [];
  // ???

  constructor(private hallService: HallService) { }

  ngOnInit() {
    this.getHall('6');
    // ???
    // this.fillBoughtSeats(this.session);
  }

  // ???
  // public fillBoughtSeats(session: DisplaySessionComponent) {

  // }


  public getHalls() {
    this.hallService.getAll().subscribe(data => {
      this.halls = data;
    });
  }


  public getHall(hall_id: string) {
    this.hallService.getOne(hall_id).subscribe(data => {
      this.hall = data;
      for (var i = 1; i < this.hall.seats.length; i++) {
        this.seats.push(this.hall.seats[i])
      }
    });
  }


  public seatClick(seat: Seat) {
    var index = this.selectedSeats.indexOf(seat);
    if (index !== -1) {
      this.removeSeatFromSelectedSeats(seat)
    } else {
      this.selectedSeats.push(seat);
    }
  }


  public cleanSelect() {
    this.selectedSeats = [];
  }


  public getStatus(seat: Seat) {
    if (this.boughtSeats.indexOf(seat) !== -1) {
      return 'bought';
    } else if (this.selectedSeats.indexOf(seat) !== -1) {
      return 'selected';
    }
  }


  public removeSeatFromSelectedSeats(seat: Seat) {
    var index = this.selectedSeats.indexOf(seat);
    this.selectedSeats.splice(index, 1);
  }

  storedSeats: Array<Seat> = [];
  notCleanedSeats: Array<Seat> = [];

  public throwSelectedSeatsToOrder() {

    //0. check if there is some data in LocalStorage
    console.log("forwarded selectedSeats list to the order page");
    this.notCleanedSeats.push(JSON.parse(localStorage.getItem(seatArrayInStorage)));
    console.log("X");
    console.log(this.notCleanedSeats);

    //1. set seat array to LocalStorage
    localStorage.setItem(seatArrayInStorage, JSON.stringify(this.selectedSeats));
    console.log("seats send to the local storage");

    //2. get seat array from LocalStorage
    this.storedSeats.push(JSON.parse(localStorage.getItem(seatArrayInStorage)));
    console.log("Y");
    console.log(this.storedSeats);
    console.log("seats taken from the local storage");

    //3. remove seat array from LocalStorage
    console.log("start removing");
    localStorage.removeItem(seatArrayInStorage);
    console.log("end removing");
  }


}


