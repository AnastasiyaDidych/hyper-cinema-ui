import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { TicketService } from '../ticket.servise';
import { Ticket } from '../ticket.model';

import { PageEvent } from '@angular/material';



@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

    @ViewChild('barcode') barcode: ElementRef;

    private searchFilm: string = '';
    private searchUser: string = '';

    private pageIndex: number = 0;
    private totalPages: Array<number>;


    private length: number;
    private pageSize: number = 10;
    private pageSizeOptions: number[] = [5, 10, 20];
    private pageEvent: PageEvent;

    tickets: Ticket[] = [];

    constructor(
        private router: Router,
        private ticketService: TicketService
    ) { }


    ngOnInit(): void {
        this.getAllTickets();
        this.getPageOfTickets();
    }

// only total quantity of tickets is calculated
    getAllTickets(): void {
        this.ticketService.getAllTickets()
            .subscribe(
                (success) => {
                    // this.tickets = success;
                    this.length = success.length;
                },
                (error) => {
                    console.log(error);
                });
    }

    getPageOfTickets(): void {
        this.ticketService.getPageOfTickets(this.pageIndex)
            .subscribe(
                (success) => {
                    this.tickets = success['content'];
                    this.totalPages = new Array(success['totalPages']);
                    console.log(success);
                },
                (error) => {
                    console.log(error);
                }
            );
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
        // this.ticketService.selectTicket(id).subscribe();
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }

    // getServerData(event?:PageEvent){
    //     this.ticketService.getPageOfTickets()
    //     .subscribe(
    //         (success) => {
                
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     )
    // }
}




