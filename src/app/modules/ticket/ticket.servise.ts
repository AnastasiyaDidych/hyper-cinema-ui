import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Ticket } from './ticket.model';
import { Seat } from '../hall/model/seat.model';
import { Session } from '../sessions/session-edit/session.model';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const TICKET_API_URL = environment.apiUrl + '/tickets';

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(TICKET_API_URL + "/full");
  }

  getMyTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(TICKET_API_URL + "/my");
  }

  getPageOfTickets(page: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(TICKET_API_URL + "?page=" + page);
  }

  deleteTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.delete<Ticket>(TICKET_API_URL + `/${ticket.id}`, httpOptions);
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(TICKET_API_URL + `/full/` + id);
  }

  buildTicket(session: Session, seat: Seat): Ticket{
    let ticket = new Ticket;
    ticket.sessionId = session.id;
    ticket.seatId = seat.id;
    ticket.price = seat.price;
    return ticket;
  }

  getUnavailableTickets(session: Session): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(TICKET_API_URL + session.id);
  }

  sendTicketByMail(id: number): Observable<Ticket>{
    return this.http.get<Ticket>(TICKET_API_URL + '/send/'+ id);
  }

}