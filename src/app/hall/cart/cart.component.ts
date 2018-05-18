import { Component, OnInit } from '@angular/core';
import { Order } from '../../order/order.model';
import { Seat } from '../seat.model';
import { Session } from '../../sessions/session-edit/session.model';
import { sessionInStorage } from '../../sessions/display-session/display-session.component';
import { Hall } from '../hall.model';
import { Movie } from '../../movie/movie-create/movie.model';
import { HallService } from '../hall.service';
import { HallComponent, seatArrayInStorage } from '../hallcom/hall.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private hallService: HallService) { }

  orders: Order[] = [];
  order: Order = Object();
  seatsFromStorage: Array<Seat> = [];
  session: Session = Object();
  hall: Hall = Object();
  movie: Movie = Object();
  totalPrice: number = 0;


  ngOnInit() {
    this.getSessionFromStorage();
    this.getSeatFromStorage();
    this.getHallFromSession(this.session.hallId);
    this.calculateOrderTotalPrice();
  }
  ngOnDestroy(): void {
    this.cleanSeatArrayInStorage();
  }

  public calculateOrderTotalPrice() {
    this.seatsFromStorage.forEach(seat => {this.totalPrice = this.totalPrice + seat.price
    });
    console.log(this.totalPrice);
  }

  public getSessionFromStorage() {
    console.log("session from localStorage")
    this.session = JSON.parse(localStorage.getItem(sessionInStorage));
    console.log(this.session);
  }

  public getHallFromSession(hall_id: number) {
    this.hallService.getOne(hall_id).subscribe(data => {
      this.hall = data;
    });

  }

  public getSeatFromStorage() {
    this.seatsFromStorage = JSON.parse(localStorage.getItem(seatArrayInStorage));
  }

  public cleanSeatArrayInStorage() {
    localStorage.removeItem(seatArrayInStorage);
  }

}
