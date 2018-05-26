import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service'
import { Session } from '../session-edit/session.model';
import { SessionEditComponent } from '../session-edit/session-edit.component'
import { ActivatedRoute } from '@angular/router';
import { DisplaySessionComponent } from '../display-session/display-session.component'
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FilterPipe } from '../session-list/filter.pipe';
import { MovieService } from '../../movie/services/movie.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  //sessions: Array<Session> = [];
  id: number;
  searchStr = '';
  pageForm: string;
  dateStr: string;
  public now: Date = new Date();
  tomorow: Date;
  titles: Array<any>;
  schedule: Array<Schedule> = [];
  sch: Schedule;
  constructor(private movieService: MovieService, private sessionService: SessionService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {

    this.setToday();


    this.sessionService.getSchedule().subscribe(data => {
      this.schedule = data;
      console.log(data);
      for (let sch of this.schedule) {
       
        this.movieService.getImdbUrl(sch.movieId, (url) => {
          sch.movieImageUrl = url;
          console.log(sch.movieImageUrl);
        }
        )}
    });


    

  }


  public setAll() {
    this.dateStr = "";
  }

  public setToday() {
    this.dateStr = this.datePipe.transform(this.now, 'yyyy-MM-dd');
  }

  public setTomorow() {
    this.tomorow = new Date();
    this.tomorow.setDate(this.tomorow.getDate() + 1);
    this.dateStr = this.datePipe.transform(this.tomorow, 'yyyy-MM-dd');
  }
}
export class Schedule {
  title: string;
  localDate: string;
  sessionEntityList: Array<Ses>;
  movieId: number;
  movieImageUrl: string;
}
export class Ses {
  id: number;
  localTime: string;
}

