import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service'
import { Session } from '../session-edit/session.model';
import { SessionEditComponent } from '../session-edit/session-edit.component'
import { ActivatedRoute } from '@angular/router';
import { DisplaySessionComponent } from '../display-session/display-session.component'
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FdatePipe } from '../session-list/dat.pipe';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../../shared/security/auth.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: Array<Session> = [];
  id: number;
  pageForm: string;
  public now: Date = new Date();
  tomorow: Date;
  titles: Array<any>;
  dStr: string;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor(
    public authService: AuthService,
    private sessionService: SessionService,
    private router: Router,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.sessionService.getAll().subscribe(data => {
      this.sessions = data;
      console.log(data);
    });

  }


  deleteSession(session: Session): void {
    if (window.confirm('Delete session?')) {
    this.sessionService.deleteSession(session.id)
      .subscribe(data => {
        this.sessions = this.sessions.filter(s => s !== session);
      })
  }}
}




