import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AlertComponent } from './alert/alert.component';
import { SecurityModule } from '../../shared/security/security.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityModule
  ],
  declarations: [
    UserFormComponent,
    AlertComponent
  ],
  entryComponents: [AlertComponent],
  providers: [UserService]
})
export class UserFormModule { }
