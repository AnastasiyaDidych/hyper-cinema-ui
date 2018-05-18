import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../order.model';


@Injectable()
export class OrderDetailsService {

    private orderDetailsUrl = 'http://localhost:1305/orders';

    constructor(private http: HttpClient){}

    getOrderDetails(id:number): Observable<Order>{
        return this.http.get<Order>(this.orderDetailsUrl + "/" + id);
    }

}