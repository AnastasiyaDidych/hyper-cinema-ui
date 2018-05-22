import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

    private orderUrl = 'http://localhost:1305/orders';

    constructor(private http: HttpClient) { }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.orderUrl);
    }

    getAllOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.orderUrl + '/all');
    }

    createOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.orderUrl, order);
    }

}