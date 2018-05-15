import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.component';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class OrderService {

    private ticketUrl = 'http://localhost:1305/orders';

    constructor(private http: HttpClient) {}

    getAllOrders(): Observable<Order[]>{
        return this.http.get<Order[]>(this.ticketUrl+'/all');
    }
    
}