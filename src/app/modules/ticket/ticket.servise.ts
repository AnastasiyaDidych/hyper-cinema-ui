import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Ticket } from './ticket.model';
import { Seat } from '../hall/model/seat.model';
import { Session } from '../sessions/session-edit/session.model';

//var email = require('emailjs/email');

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TicketService {

  private ticketUrl = '//localhost:1305/tickets';

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketUrl + "/full");
  }

  deleteTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.delete<Ticket>(this.ticketUrl + `/${ticket.id}`, httpOptions);
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.ticketUrl + `/full/` + id);
  }

  buildTicket(session: Session, seat: Seat): Ticket{
    let ticket = new Ticket;
    ticket.sessionId = session.id;
    ticket.seatId = seat.id;
    ticket.price = seat.price;
    return ticket;
  }

  getUnavailableTickets(session: Session): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.ticketUrl + session.id);
  }

  sendTicketByMail(id: number): Observable<Ticket>{
    return this.http.get<Ticket>(this.ticketUrl + '/send/'+ id);
  }

  buyVirtualTicket(session: Session): Ticket {

    // TODO not finished!
    let ticket = new Ticket;
    ticket.sessionId = session.id;
    return ticket;
  }

}