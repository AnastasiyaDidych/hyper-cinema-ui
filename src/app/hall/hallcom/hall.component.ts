import { Component, OnInit } from '@angular/core';
import { HallService } from '../hall.service'
import { Observable } from 'rxjs/Observable';
import { Hall } from '../hall.model';
import { Seat } from '../seat.model';
import { Ticket } from '../../ticket/ticket.model';
import { Router } from '@angular/router';
import { Session } from '../../sessions/session-edit/session.model';
import { sessionInStorage } from '../../sessions/display-session/display-session.component';



export const seatArrayInStorage = "storedSeats";

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
  session: Session = Object();

  constructor(private hallService: HallService) { }

  ngOnInit() {
    this.getSessionFromStorage();
    this.getHall(this.session.hallId);
    // ???
    // this.fillBoughtSeats(this.session);
  }

  // ???
  // public fillBoughtSeats(session: DisplaySessionComponent) {

  // }
  public getSessionFromStorage() {
    console.log("session from localStorage")
    this.session = JSON.parse(localStorage.getItem(sessionInStorage));
    console.log(this.session);
    console.log(this.session.hallId)
  }

  public getHalls() {
    this.hallService.getAll().subscribe(data => {
      this.halls = data;
    });
  }


  public getHall(hall_id: number) {
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
      if (seat.type === "VIP") {
        seat.price = this.session.vipPrice;
        this.selectedSeats.push(seat);
        console.log("Vip price:")
        console.log(this.session.vipPrice)
        console.log("Vip price on seat:")
        console.log(seat.price);
      } else{
        seat.price = this.session.basePrice;
        console.log("base price:")
        console.log(this.session.basePrice)
        console.log("base price on seat:")
        console.log(seat.price);
        this.selectedSeats.push(seat);
      }
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


  public throwSelectedSeatsToOrder() {
    localStorage.setItem(seatArrayInStorage, JSON.stringify(this.selectedSeats));
    console.log("seats send to the local storage");
  }

}


