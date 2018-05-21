import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Hall } from './model/hall.model';
import { Ticket } from '../ticket/ticket.model';
import { Seat } from './model/seat.model';
import { HallService } from './hall.service';
import { Session } from '../sessions/session-edit/session.model';
import { sessionInStorage } from '../sessions/display-session/display-session.component';
import { SeatService } from './seat.service';
import { TicketForSession } from './model/tictetForSession.model';

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
  tickets: Array<TicketForSession> = [];
  seat: Seat = Object();

  selectedSeats: Seat[] = [];
  boughtSeats: Seat[] = [];
  session: Session = Object();


  constructor(private hallService: HallService, private seatService: SeatService) { }

  ngOnInit() {
    this.getSessionFromStorage();
    this.getHall(this.session.hallId);
  }


  public fillBoughtSeats() {
    this.tickets = this.session.tickets;
    if (this.tickets !== null) {
      for (var i = 0; i < this.tickets.length; i++) {
        let seat = this.getSeatById(this.tickets[i].seatId);
        if (seat !== null) {
          this.boughtSeats.push(seat);
        }
      }
    }
    console.log("bought seats")
    console.log(this.boughtSeats);

  }

  public getSeatById(seatId: number): Seat {
    for (let i in this.seats) {
      if (this.seats[i].id === seatId) {
        return this.seats[i];
      }
    }
    return null;
  }

  public getSessionFromStorage() {
    this.session = JSON.parse(localStorage.getItem(sessionInStorage));
  }


  public getHall(hall_id: number) {
    this.hallService.getHall(hall_id).subscribe(data => {
      this.hall = data;
      console.log(this.hall.id);
      for (var i = 1; i < this.hall.seats.length; i++) {
        this.hall.seats[i].hall_id = this.hall.id;
        this.seats.push(this.hall.seats[i]);
      }
      this.fillBoughtSeats();
    });
  }

  public getHalls() {
    this.hallService.getHalls().subscribe(data => {
      this.halls = data;
    });
  }

  public seatClick(seat: Seat) {
    var index = this.selectedSeats.indexOf(seat);
    if (index !== -1) {
      this.removeSeatFromSelectedSeats(seat)
    } else if(!this.boughtSeats.includes(seat)) {
      if (seat.type === "VIP") {
        seat.price = this.session.vipPrice;
        this.selectedSeats.push(seat);
      } else {
        seat.price = this.session.basePrice;
        this.selectedSeats.push(seat);
      }
    }
  }


  public cleanSelect() {
    this.selectedSeats = [];
  }


  public getStatus(seat: Seat) {
   if(this.boughtSeats.includes(seat)){
     return 'buy'; 
   }else 
  if (this.selectedSeats.indexOf(seat) !== -1) {
      return 'selected';
    }
  }



  public getType(seat: Seat) {
    if (seat.type === "VIP") {
      return 'VIP';
    }
  }



  public removeSeatFromSelectedSeats(seat: Seat) {
    var index = this.selectedSeats.indexOf(seat);
    this.selectedSeats.splice(index, 1);
  }


  public throwSelectedSeatsToCart() {
    localStorage.setItem(seatArrayInStorage, JSON.stringify(this.selectedSeats));
    console.log("seats send to the local storage");
  }

}


