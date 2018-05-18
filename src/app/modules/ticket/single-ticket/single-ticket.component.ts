import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
// import jsPDF from 'jspdf';
import * as jsPDF from 'jspdf'

import { TicketService } from '../ticket.servise';
import { Ticket } from '../ticket.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-single-ticket',
    templateUrl: './single-ticket.component.html',
    styleUrls: ['./single-ticket.component.css'],
    providers: [
        { provide: 'Window', useValue: window }
    ]
})
export class SingleTicketComponent implements OnInit {

    private ticket: Ticket;

    private sub: Subscription

    @ViewChild('ticket-pdf') el: ElementRef;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private ticketService: TicketService,
    ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.ticketService.getTicket(id)
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

    delete(ticket: Ticket): void {
        if (window.confirm('Delete ticket?')) {
            this.ticketService.deleteTicket(ticket)
                .subscribe( (success) => {
                    this.router.navigateByUrl('/tickets');
                    
                });
        }
    }

    download() {
        let page = document.getElementById('ticket-pdf');
        console.log(page);
        let doc = new jsPDF('p', 'pt', [0, 0]);
        doc.deletePage(1);

        doc.addPage(page.clientWidth, page.clientHeight);
        doc.addHTML(page, 0, 0, { background: "#FFF" }, () => {
            doc.save('Ticket.pdf');
        });
    }


}
