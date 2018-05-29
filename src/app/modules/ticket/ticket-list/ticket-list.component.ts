import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { TicketService, virtualTicketsInStorage } from '../ticket.servise';
import { Ticket } from '../ticket.model';

import { PageEvent, MatPaginator } from '@angular/material';
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

    private pageIndex: number = 0;
    private totalPages: Array<number>;

    tickets: Ticket[] = [];
    virtualTickets: Array<Ticket> = [];

    private length: number;
    private pageSize: number = 20;
    private pageSizeOptions: number[] = [5, 10, 20];
    private pageEvent: PageEvent;


    @ViewChild(MatPaginator) paginator: MatPaginator;

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
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }

    showMyTickets() {
        this.ticketService.getMyTickets()
            .subscribe(
                (success) => {
                    this.tickets = success;
                    this.sortTickets();
                },
                (error) => {
                    console.log(error);
                }
            );
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

    public sortTickets() {
        for (var i = 1; i < this.tickets.length; i++) {
            if (this.tickets[i].seatRow === 0) {
                this.virtualTickets.push(this.tickets[i]);
            }
        }
        this.throwVirtualTicketInStorage();
    }

    public throwVirtualTicketInStorage() {
        localStorage.setItem(virtualTicketsInStorage, JSON.stringify(this.virtualTickets));
    }
}




