import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HallComponent } from './hall/hallcom/hall.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { DisplaySessionComponent } from './sessions/display-session/display-session.component';
import { SessionEditComponent } from './sessions/session-edit/session-edit.component';
import { LoginComponent } from './sessions/login/login.component';
import { ErrorDialogComponent } from './sessions/core/error-dialog.component';
import { SearchPipe } from './sessions/session-list/search.pipe';
import { FilterPipe } from './sessions/session-list/filter.pipe';
// import { FilterPipe } from './movie/filter/filter.pipe';
import { UniquePipe } from './sessions/session-list/unique.pipe';
import { ASD } from './sessions/session-list/asd.pipe';
import { CustomMaterialModule } from './sessions/core/material.module';
import { AppRoutingModule } from './sessions/core/app.routing.module';
import { AuthService } from './sessions/core/auth.service';
// import { AuthService } from './movie/login/login.service';
import { SessionService } from './sessions/shared/session.service';
import { TokenStorage } from './sessions/core/token.storage';
import { Interceptor } from './sessions/core/inteceptor';
import { TicketModule } from './ticket/ticket.module';
import { OrderModule } from './order/order.module';
import { OrderDetailsModule } from './order/order-details/order-details.module';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './movie/movie-create/movie-create.component';
import { MovieService } from './movie/services/movie.service';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';




const appRoutes: Routes = [
  { path: '', redirectTo: '/session-list', pathMatch: 'full' },
  {
    path: 'session-list',
    component: SessionListComponent
  },
  {
    path: 'session-add',
    component: SessionListComponent
  },
  {
    path: 'display-session/:id',
    component: DisplaySessionComponent
  },
  {
    path: 'session-delete',
    component: SessionEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,

    MovieListComponent,
    MovieCreateComponent,
    LoginComponent,
    FilterPipe,
    LoginComponent,
    ErrorDialogComponent,
    SessionListComponent,
    SessionEditComponent,
    DisplaySessionComponent,
    SearchPipe,
    FilterPipe,
    UniquePipe,
    ASD,
    HallComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CustomMaterialModule,
    AppRoutingModule,
    // HallComponent,
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
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  entryComponents: [
    ErrorDialogComponent
  ],
  
  providers: [
    ErrorDialogComponent, 
    MovieService,
    AuthService,
    SessionService,
    TokenStorage, 
    DatePipe,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}
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
  bootstrap: [AppComponent]
})
export class AppModule { }
