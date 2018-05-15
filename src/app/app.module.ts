import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { TicketModule } from './components/ticket/ticket.module';
import { SessionModule } from './components/session/session.module';
import { OrderModule } from './components/order/order.module';
import { CoefficientModule } from './components/coefficient/coefficient.module';
import { UserModule } from './components/user/user.module';


import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsModule } from './components/order/order-details/order-details.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TicketModule,
    SessionModule,
    OrderModule,
    CoefficientModule,
    UserModule,
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
