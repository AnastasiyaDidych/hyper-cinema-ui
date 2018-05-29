import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Ticket } from '../ticket/ticket.model';
import { virtualTicketsInStorage } from '../ticket/ticket.servise';

@Component({
  selector: 'app-online-film',
  templateUrl: './online-film.component.html',
  styleUrls: ['./online-film.component.css']
})
export class OnlineFilmComponent implements OnInit {

  currentTime: Time = Object();
  currentDate: Date = Object();
  sessionDate: Date = Object();
  virtualTicketDate: Date = Object();
  virtualTickets: Array<Ticket> = [];

  constructor() { }

  ngOnInit() {
    this.getVirtualTickets();
    this.getCurrentDate();

    // setInterval(() => {
    //   console.log("1")
    // }, 1000);
  }

  public getCurrentDate() {
    this.currentDate = new Date();
    console.log("current date and time");
    console.log(this.currentDate);
  }

  public getVirtualTickets() {
    this.virtualTickets = JSON.parse(localStorage.getItem(virtualTicketsInStorage));
    console.log(this.virtualTickets);
  }

  public getTicketDate(ticket: Ticket) {
    return ticket.tech;
    // setInterval(() => {
    //   this.virtualTicketDate = new Date(ticket.sessionDate);
    //   return this.virtualTicketDate;
    // }, 1000);
    // this.virtualTicketDate = new Date(ticket.sessionDate);
    // return this.virtualTicketDate;
  }

}
