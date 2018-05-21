import { Component, OnInit } from '@angular/core';
import { HallService } from '../hall/hall.service';
import { Order } from '../order/order.component';
import { Seat } from '../hall/model/seat.model';
import { Session } from '../sessions/session-edit/session.model';
import { Hall } from '../hall/model/hall.model';
import { sessionInStorage } from '../sessions/display-session/display-session.component';
import { seatArrayInStorage } from '../hall/hall.component';
import { Router } from '@angular/router';

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
  totalPrice: number = 0;
  seat: Seat = Object();


  ngOnInit() {
    this.start();
  }
  ngOnDestroy(): void {
    this.cleanSeatArrayInStorage();
  }

  public start() {
    if (localStorage.getItem(sessionInStorage) !== null) {
      this.getSessionFromStorage();
      this.getSeatFromStorage();
      this.getHallFromSession(this.session.hallId);
      this.calculateOrderTotalPrice();
    } else {
      console.log("No session in storage")
    }
  }

  public calculateOrderTotalPrice() {
    this.seatsFromStorage.forEach(seat => {
      this.totalPrice = this.totalPrice + seat.price
    });
    console.log(this.totalPrice);
  }

  public getSessionFromStorage() {
    this.session = JSON.parse(localStorage.getItem(sessionInStorage));
    console.log(this.session);
  }

  public getHallFromSession(hall_id: number) {
    this.hallService.getHall(hall_id).subscribe(data => {
      this.hall = data;
    });

  }

  public getSeatFromStorage() {
    this.seatsFromStorage = JSON.parse(localStorage.getItem(seatArrayInStorage));
  }

  public cleanSeatArrayInStorage() {
    localStorage.removeItem(seatArrayInStorage);
  }

  public payOrder() {

  }

}
