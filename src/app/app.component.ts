import { Component } from '@angular/core';
import { Router, Data } from '@angular/router';
import { AuthService } from './shared/security/auth.service';
import { Ticket } from './modules/ticket/ticket.model';
import { virtualTicketsInStorage } from './modules/ticket/ticket.servise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date: Date = new Date();
  title = 'Hyper Cinema';
  virtualTickets: Array<Ticket> = [];

  constructor(public authService: AuthService) { }

  ngOnInit() {
    // this.virtualTickets = JSON.parse(localStorage.getItem(virtualTicketsInStorage));
    // this.checkVirtualSession();
  }

  // public checkVirtualSession() {
  //   this.virtualTickets = JSON.parse(localStorage.getItem(virtualTicketsInStorage));
  //   console.log(this.date);
  //   console.log("virtualTickets in storage:");
  //   console.log(this.virtualTickets);
  // }

}
