import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

    private ticketUrl = 'http://localhost:1305/orders';

    constructor(private http: HttpClient) { }

    getAllOrders(): Observable<any> {
        return this.http.get(this.ticketUrl + '/all');
    }

    getOrder(): Observable<any> {
        return this.http.get(this.ticketUrl + '/' + '3');
    }


}