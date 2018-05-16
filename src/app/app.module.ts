import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { DisplaySessionComponent } from './sessions/display-session/display-session.component';
import { SessionEditComponent } from './sessions/session-edit/session-edit.component';
import { ErrorDialogComponent } from './sessions/core/error-dialog.component';


import { SearchPipe } from './sessions/session-list/search.pipe';
import { FilterPipe } from './sessions/session-list/filter.pipe';
// import { FilterPipe } from './movie/filter/filter.pipe';
import { UniquePipe } from './sessions/session-list/unique.pipe';
import { ASD } from './sessions/session-list/asd.pipe';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './sessions/core/auth.service';
// import { AuthService } from './movie/login/login.service';
import { SessionService } from './sessions/shared/session.service';
import { TokenStorage } from './sessions/core/token.storage';
import { Interceptor } from './sessions/core/inteceptor';
import { TicketModule } from './ticket/ticket.module';
import { OrderModule } from './order/order.module';
import { OrderDetailsModule } from './order/order-details/order-details.module';
import { HallModule } from './hall/hall.module';
import { MovieService } from './movie/services/movie.service';

import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    ASD

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TicketModule,
    OrderModule,
    OrderDetailsModule,
    HallModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],

  entryComponents: [
    ErrorDialogComponent,
    LoginComponent
  ],

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
