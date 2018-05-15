import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HallComponent } from './hall/hallcom/hall.component';

import { TicketModule } from './ticket/ticket.module';
import { OrderModule } from './order/order.module';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsModule } from './order/order-details/order-details.module';


@NgModule({
  declarations: [
    AppComponent,
    HallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TicketModule,
    OrderModule,
    OrderDetailsModule,

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
  // Angular material Modules
  BrowserAnimationsModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
