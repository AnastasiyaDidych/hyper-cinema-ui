import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { LoginModule } from './modules/login/login.module';
import { MovieDetailsComponent } from './modules/movie/movie-details/movie-details.component';
import { CartComponent } from './modules/cart/cart.component';
import { UserFormModule } from './modules/user-form/user-form.module';
import { SecurityModule } from './shared/security/security.module';
import { AppRoutingModule } from './app.routing.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { HallModule } from './modules/hall/hall.module';
import { OrderModule } from './modules/order/order.module';
import { ErrorDialogComponent } from './modules/sessions/core/error-dialog.component';
import { MovieService } from './modules/movie/services/movie.service';
import { SessionService } from './modules/sessions/shared/session.service';
import { MovieModule } from './modules/movie/movie.module';
import { OneHallModule } from './modules/hall/one-hall/one-hall.module';
import { HallListModule } from './modules/hall/hall-list/hall-list.module';
import { MovieCreateComponent } from './modules/movie/movie-create/movie-create.component';
import { SessionListComponent } from './modules/sessions/session-list/session-list.component';
import { DisplaySessionComponent } from './modules/sessions/display-session/display-session.component';
import { SessionEditComponent } from './modules/sessions/session-edit/session-edit.component';
import { SearchPipe } from './modules/sessions/session-list/search.pipe';
import { FilterPipe } from './modules/sessions/session-list/filter.pipe';
import { UniquePipe } from './modules/sessions/session-list/unique.pipe';
import { ScheduleListComponent } from './modules/sessions/schedule-list/schedule-list.component';
import { ASD } from './modules/sessions/session-list/asd.pipe';
import { Interceptor } from './shared/security/inteceptor';
import { CoefficientListComponent } from './modules/coefficient/coefficient-list/coefficient-list.component';
import { CoefficientService } from './modules/coefficient/service/coefficient.service';
import { CoefficientDetailsComponent } from './/modules/coefficient/coefficient-details/coefficient-details.component';
import { CoefficientEditComponent } from './/modules/coefficient/coefficient-edit/coefficient-edit.component';
import { CoefficientFilterPipe } from './modules/coefficient/filter/coefficient-filter.pipe';

import { FdatePipe } from './modules/sessions/session-list/dat.pipe';
import { AuthService } from './shared/security/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    SessionListComponent,
    SessionEditComponent,
    DisplaySessionComponent,
    SearchPipe,
    FilterPipe,
    UniquePipe,
    ASD,
    CartComponent,
    CoefficientListComponent,
    CoefficientDetailsComponent,
    CoefficientEditComponent,
    CoefficientFilterPipe,    
    ScheduleListComponent,
    FdatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityModule,
    TicketModule,
    MovieModule,
    TicketModule,
    HallListModule,
    OneHallModule,
    LoginModule,
    UserFormModule,
    OrderModule,
    HallModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],

  providers: [
    ErrorDialogComponent,
    MovieService,
    SessionService,
    CoefficientService,
    DatePipe,
    AuthService
  ],

  exports: [
    BrowserAnimationsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
