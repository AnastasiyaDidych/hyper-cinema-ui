import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TicketService } from './ticket.servise';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

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
    };

    delete(ticket: Ticket): void {
        if (window.confirm('Delete ticket?')) {
            this.ticketService.deleteTicket(ticket)
                .subscribe(data => {
                    this.tickets = this.tickets
                        .filter(t => t !== ticket);
                });
        }
    }
}



export class Ticket {

    id: number;
    filmName: string;
    tech: string;
    sessionDate: number;
    sessionTime: number;
    seatRow: number;
    seatNumber: number;
    hallName: string;
    price: number;
    barcode: string;

}
