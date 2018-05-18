import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TicketService } from '../ticket.servise';
import { Ticket } from '../ticket.model';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

    private searchFilm: string = '';
    private searchUser: string = '';

    tickets: Ticket[] = [];

    constructor(
        private router: Router,
        private ticketService: TicketService
    ) { }

    ngOnInit(): void {
        this.ticketService.getAllTickets()
            .subscribe(
                (success) => {
                    this.tickets = success;
                },
                (error) => {
                    console.log(error);
                });
    }

    delete(ticket: Ticket): void {
        if (window.confirm('Delete ticket?')) {
            this.ticketService.deleteTicket(ticket)
                .subscribe(data => {
                    this.tickets = this.tickets
                        .filter(t => t !== ticket);
                });
        }
    }

    select(id: number): void {
        console.log('button select was clicked:' + id);
        this.router.navigateByUrl('/tickets/'+ id);
        // this.ticketService.selectTicket(id).subscribe();
    }
}




