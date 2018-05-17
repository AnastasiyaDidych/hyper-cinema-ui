import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxBarcodeModule } from 'ngx-barcode';


import { BrowserModule } from '@angular/platform-browser';
import { TicketService } from '../ticket.servise';
import { MaterialModule } from '../../material.module';
import { TicketListComponent } from './ticket-list.component';

@NgModule({
    declarations: [
        TicketListComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        NgxBarcodeModule,
        MaterialModule,
    ],
    exports: [
        TicketListComponent
    ],
    providers: [
        TicketService
    ],
})
export class TicketListModule {

}