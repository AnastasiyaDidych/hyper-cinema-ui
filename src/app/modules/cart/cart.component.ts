import { Component, OnInit } from '@angular/core';
import { HallService } from '../hall/hall.service';
import { Seat } from '../hall/model/seat.model';
import { Session } from '../sessions/session-edit/session.model';
import { Hall } from '../hall/model/hall.model';
import { sessionInStorage } from '../sessions/display-session/display-session.component';
import { seatArrayInStorage } from '../hall/hall.component';
import { Order } from '../order/order.model';
import { Router } from '@angular/router';
import { OrderService } from '../order/order.service';
import { Ticket } from '../ticket/ticket.model';
import { TicketService } from '../ticket/ticket.servise';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private hallService: HallService,
    private orderService: OrderService,
    private ticketService: TicketService
  ) { }

  orders: Order[] = [];
  order: Order;
  tickets: Ticket[] = [];
  seatsFromStorage: Array<Seat> = [];
  session: Session = Object();
  hall: Hall = Object();
  totalPrice: number = 0;


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
      this.initOrder();
    }else{
      throw Error;
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

  initOrder(): void{
    this.order = new Order;
    this.seatsFromStorage.forEach(
      seat => {
        this.tickets.push(
          this.ticketService.buildTicket(this.session, seat)
        );
      }
    );
    this.order.tickets = this.tickets;
    this.order.price = this.totalPrice;
  }

  createOrder(): void{
    this.orderService.createOrder(this.order)
    .subscribe(
      (success) => {
        console.log('Order created -> ' + this.order.tickets.length + ' tickets');
      },
      (error) =>{
        console.log('Order not created')
      }
    );
  }

}
