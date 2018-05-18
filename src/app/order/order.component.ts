import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Seat } from '../hall/seat.model';
import { Order } from './order.model';
import { HallComponent } from '../hall/hallcom/hall.component';

const seatArrayInStorage = "storedSeats";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    orders: Order[] = [];
    order: Order = Object();

    constructor(private orderService: OrderService) { }

    ngOnInit(): void {
    };
    
    public getOneOrder() {
        return this.orderService.getOrder().subscribe(data => {
            this.order = data;
        });
    }

    public getAllOrders() {
        this.orderService.getAllOrders().subscribe(data => {
            this.orders = data;

        });
    }
}



