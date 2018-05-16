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
    this.getHall('6');
    this.fillBoughtSeats();
  }


  public fillBoughtSeats() {

  }


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
      console.log("bought status")
      return 'bought';
    } else if (this.selectedSeats.indexOf(seat) !== -1) {
      console.log("selected status")
      return 'selected';
    }
  }


  public removeSeatFromSelectedSeats(seat: Seat) {
    var index = this.selectedSeats.indexOf(seat);
    this.selectedSeats.splice(index, 1);
  }


  public throwSelectedSeatsToOrder() {
    console.log("forwarded selectedSeats list to the order page")

  }
}


