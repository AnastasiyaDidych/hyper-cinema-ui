import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { HallService, hallIdInStorage } from '../hall.service';
import { Hall } from '../model/hall.model';
import { Seat } from '../model/seat.model';
import { SeatService } from '../seat.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-one-hall',
  templateUrl: './one-hall.component.html',
  styleUrls: ['./one-hall.component.css']
})
export class OneHallComponent implements OnInit {

  sub: Subscription;
  hall: Hall = Object();
  seats: Array<Seat> = [];
  hallId: number = 0;
  selectedSeats: Seat[] = [];


  constructor(private seatService: SeatService, private hallService: HallService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHallIdFromStorage();
    this.getHall(this.hallId);
  }

  public getHall(hall_id: number) {
    this.hallService.getHall(hall_id).subscribe(data => {
      this.hall = data;
      for (var i = 1; i < this.hall.seats.length; i++) {
        this.seats.push(this.hall.seats[i])
      }
    });
  }

  public getHallIdFromStorage() {
    this.hallId = JSON.parse(localStorage.getItem(hallIdInStorage));
  }

  public getStatus(seat: Seat) {
    if (this.selectedSeats.indexOf(seat) !== -1) {
      return 'selected';
    }
  }

  public seatClick(seat: Seat) {
    var index = this.selectedSeats.indexOf(seat);
    if (index !== -1) {
      this.removeSeatFromSelectedSeats(seat)
    } else {
      this.selectedSeats.push(seat);
      seat.hall_id = this.hall.id;
      console.log(this.selectedSeats);
    }
  }

  public removeSeatFromSelectedSeats(seat: Seat) {
    var index = this.selectedSeats.indexOf(seat);
    this.selectedSeats.splice(index, 1);
  }

  public updateSeat(seat: Seat) {
    this.seatService.putSeat(seat);

  }

  public changeSeatType() {
    this.selectedSeats.forEach(seat => {
      if (seat.type === 'base') {
        seat.type = 'VIP';
        console.log(seat)
        this.updateSeat(seat);
      } else if (seat.type === 'VIP') {
        seat.type = 'base';
        this.updateSeat(seat);
      }
    });
    this.selectedSeats = [];
  }
}
