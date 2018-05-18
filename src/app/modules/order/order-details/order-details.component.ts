import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Order } from '../order.component';
import { OrderDetailsService } from './order-details.service';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

    sub: Subscription;

    // @Input() order: Order;

    orderDetails: Order;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private orderDetailsService: OrderDetailsService
    ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.orderDetailsService.getOrderDetails(id)
                    .subscribe(data => {
                        this.orderDetails = data;
                    });
            }
        });
    }

}