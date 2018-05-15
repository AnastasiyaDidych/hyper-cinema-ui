import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { NgForm } from '@angular/forms';
import {Session} from '../session-edit/session.model'

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.css']
})

export class SessionEditComponent implements OnInit,OnDestroy {
  session: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService: SessionService
             ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.sessionService.get(id).subscribe((session: any) => {
          if (session) {
            this.session = session;
            this.session.href = session._links.self.href;
            
          } else {
            console.log(`session with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/session-list']);
  }

  createSession(): void {
    console.log(this.session);
    this.sessionService.createSession(this.session)
        .subscribe( data => {
          alert("Session created successfully.");
        });
      }
      
      
    
}
