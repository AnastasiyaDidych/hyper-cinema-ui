import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service'
import { Session } from '../session-edit/session.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TicketForSession } from '../../hall/model/tictetForSession.model';
import { Seat } from '../../hall/model/seat.model';
import { Hall } from '../../hall/model/hall.model';
import { HallService } from '../../hall/hall.service';
import { seatArrayInStorage } from '../../hall/hall.component';
import { MovieService } from '../../movie/services/movie.service';

export const sessionInStorage = "sessionInStorage";
//export const ticketsArray: Array<TicketForSession> = this.ticketsFromSession;


@Component({
  selector: 'app-display-session',
  templateUrl: './display-session.component.html',
  styleUrls: ['./display-session.component.css']
})
export class DisplaySessionComponent implements OnInit {
  sessions: Session[] = [];
  session: Session;
  id: number;
  sub: Subscription;
  ticketsFromSession: Array<TicketForSession> = [];
  virtuaSeat: Array<Seat> = [];
  hall: Hall = Object();

  private imageUrl: string;

  constructor(
    private movieService: MovieService,
    private hallService: HallService,
    private sessionService: SessionService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.sessionService.get(id).subscribe((car: any) => {
          if (car) {
            this.session = car;
            this.movieService.getImdbUrl(this.session.movieId, (url) => {
              this.session.movieImageUrl = url;
              console.log(this.session.movieImageUrl);
              for (var i = 1; i < this.session.tickets.length; i++) {
                this.ticketsFromSession.push(this.session.tickets[i]);
              }
              this.getHall(this.session.hallId);
            });
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);

          }
        });
      }
    });
  }

  public generateForDay(session: Session): void {
    if (window.confirm('Generate for a day?')) {
      this.sessionService.genetateForDay(session.id)
        .subscribe(data => {
          this.sessions = this.sessions.filter(s => s !== session);
        })
    }
  }

  public setSessionToLocalStorage(session: DisplaySessionComponent) {
    localStorage.setItem(sessionInStorage, JSON.stringify(session));
   // localStorage.setItem(ticketsArray, JSON.stringify(this.ticketsFromSession));

  }

  public setVirtualSeatToSeatArray() {
    localStorage.setItem(seatArrayInStorage, JSON.stringify(this.virtuaSeat));
  }

  public getHall(hall_id: number) {
    this.hallService.getHall(hall_id).subscribe(data => {
      this.hall = data;
      if (this.hall.seats !== null) {
        this.virtuaSeat.push(this.hall.seats[0]);
        this.virtuaSeat[0].price = (this.session.vipPrice + 100);
      }
    });
  }

}