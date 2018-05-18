import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Ticket } from './ticket.model';

var email = require('emailjs/email');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TicketService {

  private ticketUrl = '//localhost:1305/tickets';

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    console.log('getting All tickets...');
    return this.http.get<Ticket[]>(this.ticketUrl + "/full");
  }

  deleteTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.delete<Ticket>(this.ticketUrl + `/${ticket.id}`, httpOptions);
  }

  getTicket(id: number): Observable<Ticket> {
    console.log('service works. ID = ' + id);
    return this.http.get<Ticket>(this.ticketUrl + `/full/` + id);
  }

}