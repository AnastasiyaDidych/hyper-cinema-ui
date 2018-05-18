import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieListComponent } from './modules/movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './modules/movie/movie-create/movie-create.component';
import { SessionListComponent } from './modules/sessions/session-list/session-list.component';
import { DisplaySessionComponent } from './modules/sessions/display-session/display-session.component';
import { SessionEditComponent } from './modules/sessions/session-edit/session-edit.component';
import { ErrorDialogComponent } from './modules/sessions/core/error-dialog.component';


import { SearchPipe } from './modules/sessions/session-list/search.pipe';
import { FilterPipe } from './modules/sessions/session-list/filter.pipe';
// import { FilterPipe } from './movie/filter/filter.pipe';
import { UniquePipe } from './modules/sessions/session-list/unique.pipe';
import { ASD } from './modules/sessions/session-list/asd.pipe';
import { AppRoutingModule } from './app.routing.module';
// import { AuthService } from './movie/login/login.service';
import { SessionService } from './modules/sessions/shared/session.service';
import { TicketModule } from './modules/ticket/ticket.module';
import { OrderModule } from './modules/order/order.module';
import { OrderDetailsModule } from './modules/order/order-details/order-details.module';
import { HallModule } from './modules/hall/hall.module';
import { MovieService } from './modules/movie/services/movie.service';
import { MaterialModule } from './material.module';
import { LoginModule } from './modules/login/login.module';
import { AuthService } from './shared/auth/auth.service';
import { TokenStorage } from './shared/auth/token.storage';
import { Interceptor } from './shared/auth/inteceptor';
import { CartComponent } from './modules/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCreateComponent,
    FilterPipe,
    ErrorDialogComponent,
    SessionListComponent,
    SessionEditComponent,
    DisplaySessionComponent,
    SearchPipe,
    FilterPipe,
    UniquePipe,
    ASD,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TicketModule,
    LoginModule,
    OrderModule,
    OrderDetailsModule,
    HallModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],

  //entryComponents: [
    //ErrorDialogComponent,
   // LoginComponent
  //],

  providers: [
    ErrorDialogComponent,
    MovieService,
    AuthService,
    SessionService,
    TokenStorage,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],

  exports: [
    BrowserAnimationsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
