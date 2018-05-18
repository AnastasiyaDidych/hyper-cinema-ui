import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleTicketComponent } from './single-ticket.component';
import { MaterialModule } from '../../../material.module';
import { TicketService } from '../ticket.servise';

@NgModule({
    declarations: [
        SingleTicketComponent
    ],
    imports: [ 
        CommonModule,
        MaterialModule
    ],
    exports: [
        SingleTicketComponent
    ],
    providers: [
        TicketService
    ],
})
export class SingleTicketModule {}