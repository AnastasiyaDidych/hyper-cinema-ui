import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { UserComponent } from './user.component';

import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule
  } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [ 
        CommonModule,

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
        UserComponent
    ],
    providers: [
        UserService
    ],
})
export class UserModule {}