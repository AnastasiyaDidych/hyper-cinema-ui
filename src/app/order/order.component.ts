import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket/ticket.component';
import { OrderService } from './order.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    orders: Order[] = [];

    constructor(private orderService: OrderService) { }

    ngOnInit(): void { 
        this.orderService.getAllOrders()
        .subscribe(data => {
            this.orders = data;
        });
    };
}



export class Order{
    id: number;
    price: number;
}
