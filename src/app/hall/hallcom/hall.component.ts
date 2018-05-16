import { Component, OnInit } from '@angular/core';
import { HallService } from '../hall.service'
import { Observable } from 'rxjs/Observable';
import { Hall } from '../hall.model';
import { Seat } from '../seat.model';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  halls: Array<Hall> = [];
  hall: Hall = Object();
  seats: Array<Seat> = [];

  selectedSeats: Seat[] = [];
  boughtSeats: Seat[] = [];
  constructor(private hallService: HallService) { }

  ngOnInit() {
    this.getHall();
    this.fillBoughtSeats();
  }

  public getHalls() {
    this.hallService.getAll().subscribe(data => {
      this.halls = data;
    });
  }

  public getHall() {
    this.hallService.getOne('6').subscribe(data => {
      this.hall = data;
      for (var i = 1; i < this.hall.seats.length; i++) {
        this.seats.push(this.hall.seats[i])
      }
    });
  }

  public seatClick(seat: Seat) {
    console.log(seat.number + ", " + seat.row + " start of seatClick");
    var index = this.selectedSeats.indexOf(seat);
    if (index !== -1) {
      this.selectedSeats.splice(index, 1);
      console.log("removing from selectedSeats array")
    } else {
      this.selectedSeats.push(seat);
      console.log("pushing to selectedSeats array")
    }
    console.log("end of seatClick")
  }

  public cleanSelect() {
    console.log("start of clean")
    this.selectedSeats = [];
    console.log("end of clean")
  }


  public getStatus(seat: Seat) {
    // console.log("start of getStatus")
    if (this.boughtSeats.indexOf(seat) !== -1) {
      console.log("bought status")
      return 'bought';
    } else if (this.selectedSeats.indexOf(seat) !== -1) {
      console.log("selected status")
      return 'selected';

    }
    // console.log("end of getStatus")
  }

  public fillBoughtSeats(){

  }

  public throwSelectedSeatsToOrder() {
    console.log("forwarded selectedSeats list to the order page")
  }
}


