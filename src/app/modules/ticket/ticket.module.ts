import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from './ticket.servise';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketListModule } from './ticket-list/ticket-list.module';
import { SingleTicketModule } from './single-ticket/single-ticket.module';
import { SingleTicketComponent } from './single-ticket/single-ticket.component';

@NgModule({
    declarations: [
    ],
    imports: [ 
        CommonModule,
        TicketListModule,
        SingleTicketModule
    ],
    exports: [
        TicketListComponent,
        SingleTicketComponent
    ],
    providers: [
        TicketService
    ],
})
export class TicketModule {}