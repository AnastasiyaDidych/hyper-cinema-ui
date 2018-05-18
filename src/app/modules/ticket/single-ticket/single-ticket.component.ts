import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { TicketService } from '../ticket.servise';
import { Ticket } from '../ticket.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-single-ticket',
    templateUrl: './single-ticket.component.html',
    styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit {

    private ticket: Ticket;

    private sub: Subscription

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private ticketService: TicketService
    ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.ticketService.selectTicket(id)
                    .subscribe(
                        (success) => {
                            this.ticket = success;
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
            }
        });
    }


}
