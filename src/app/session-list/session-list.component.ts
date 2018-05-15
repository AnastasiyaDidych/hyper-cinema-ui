import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service'
import { Session } from '../session-edit/session.model';
import { SessionEditComponent } from '../session-edit/session-edit.component'
import { ActivatedRoute } from '@angular/router';
import { DisplaySessionComponent } from '../display-session/display-session.component'
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: Array<Session> = [];
  id: number;
  searchStr = ''
  pageForm: string;
  dateStr: string;
  public now: Date = new Date();
  tomorow : Date;
  titles: Array<any>; 
  constructor(private sessionService: SessionService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    
    // this.sessionService.getAll().subscribe(data  => {
    //   this.sessions = data;
    // });
    this.sessionService.getAll().subscribe(data  => {
      this.sessions = data;
    });
    // this.titles=this.sessions;
    // const curr = this.sessions.map(data => data.metadata.title);
    this.setToday();

    // this.titles=curr.filter((x, i, a) => x && a.indexOf(x) === i);
  }
  public setAll(){
    this.dateStr = "";
  }

  public setToday() {
    this.dateStr = this.datePipe.transform(this.now, 'yyyy-MM-dd');
  }

  public setTomorow() {
    this.tomorow = new Date();
    this.tomorow.setDate(this.tomorow.getDate()+1);
    this.dateStr = this.datePipe.transform(this.tomorow, 'yyyy-MM-dd');
  }

  deleteSession(session: Session): void {
    this.sessionService.deleteSession(session.id)
      .subscribe(data => {
        this.sessions = this.sessions.filter(s => s !== session);
      })
  }
  
}



