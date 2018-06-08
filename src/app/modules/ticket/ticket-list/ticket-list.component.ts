import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { TicketService } from '../ticket.servise';
import { Ticket } from '../ticket.model';

import { AuthService } from '../../../shared/security/auth.service';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

    @ViewChild('barcode') barcode: ElementRef;

    private searchFilm: string = '';
    private searchUser: string = '';
    private searchDate: string = '';

    tickets: Ticket[] = [];

    constructor(
        private router: Router,
        private ticketService: TicketService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.showMyTickets();
    }

    getAllTickets(): void {
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
        this.router.navigateByUrl('/tickets/' + id);
    }

    showMyTickets() {
        this.ticketService.getMyTickets()
            .subscribe(
                (success) => {
                    this.tickets = success;
                },
                (error) => {
                    console.log(error);
                }
            );
    }

}