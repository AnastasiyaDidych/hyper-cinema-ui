import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxBarcodeModule } from 'ngx-barcode';

import { TicketComponent } from './ticket.component';
import { TicketService } from './ticket.servise';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        TicketComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        
        NgxBarcodeModule,

        // Angular material Modules
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule
    ],
    exports: [
        TicketComponent
    ],
    providers: [
        TicketService
    ],
})
export class TicketModule {

}