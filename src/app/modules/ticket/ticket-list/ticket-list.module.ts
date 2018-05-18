import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxBarcodeModule } from 'ngx-barcode';

import { BrowserModule } from '@angular/platform-browser';
import { TicketService } from '../ticket.servise';
import { MaterialModule } from '../../../material.module';
import { TicketListComponent } from './ticket-list.component';
import { FormsModule } from '@angular/forms';
import { FilmPipe } from './film-filter.pipe';

@NgModule({
    declarations: [
        TicketListComponent,
        FilmPipe
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        NgxBarcodeModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [
        TicketListComponent,
    ],
    providers: [
        TicketService,
    ],
})
export class TicketListModule {

}