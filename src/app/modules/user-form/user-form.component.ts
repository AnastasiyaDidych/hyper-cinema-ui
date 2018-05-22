import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';
import { MatDialog } from '@angular/material';
import { AlertComponent } from './alert/alert.component';

const ACCOUNT_UPDATE_SUCCESS_MESSAGE = 'Your account was updated';
const ACCOUNT_UPDATE_ERROR_MESSAGE = 'Failed to update account. Please check your internet connection';
const SIGNUP_SUCCESS_MESSAGE = 'Your account was created';
const USER_ALREADY_EXISTS_ERROR_MESSAGE = 'User with the same email already exists';
const GENERIC_SIGNUP_ERROR_MESSAGE = 'Registration failed. Please check your internet connection';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  accountPage: boolean;
  accountPasswordRequireEnabled: boolean;
  submitting: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkPage();
    this.initForm();
  }


  passwordConfirmValidator(fieldControl: FormControl) {
    return fieldControl.value === this.userForm.get('password').value ? null : {
      dontMatch: true
    };
  }

  get formControls() {
    return this.userForm.controls;
  }

  submit(): void {
    const user: User = {
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      email: this.userForm.get('email').value,
      phone: this.userForm.get('phone').value,
      password: this.userForm.get('password').value !== '' ? this.userForm.get('password').value : null
    }
    if (this.accountPage) {
      this.updateUser(user);
    } else {
      this.createUser(user);
    }
  }


  private checkPage(): void {
    if (this.router.url === '/account') {
      this.accountPage = true;
      this.downloadUserData();
    }
  }

  private initForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [{ value: '', disabled: this.accountPage }, [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: this.accountPage ? ['']
        : ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]]
    });

    this.userForm.addControl('passwordConfirm', new FormControl(
      '', this.accountPage ? [this.passwordConfirmValidator.bind(this)]
        : [Validators.required, this.passwordConfirmValidator.bind(this)]
    ));

    if (this.accountPage) {
      this.listenOnAccountPasswordFieldsChanges();
    }
  }

  private listenOnAccountPasswordFieldsChanges(): void {
    this.userForm.get('password').valueChanges.subscribe(value => {
      if (value.length !== 0) {
        if (!this.accountPasswordRequireEnabled) {
          this.accountPasswordRequireEnabled = true;
          this.userForm.get('password').setValidators([Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]);
          this.userForm.get('password').updateValueAndValidity();
          this.userForm.get('passwordConfirm').setValidators([Validators.required, this.passwordConfirmValidator.bind(this)]);
          this.userForm.get('passwordConfirm').updateValueAndValidity();
        }
      } else {
        if (this.accountPasswordRequireEnabled) {
          this.accountPasswordRequireEnabled = false;
          this.userForm.get('password').clearValidators();
          this.userForm.get('password').updateValueAndValidity();
          this.userForm.get('passwordConfirm').setValidators([this.passwordConfirmValidator.bind(this)]);
          this.userForm.get('passwordConfirm').updateValueAndValidity();
        }
      }
    });
  }

  private downloadUserData(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.userForm.setValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        password: '',
        passwordConfirm: ''
      });
    });
  }

  private createUser(user: User): void {
    this.submitting = true;
    this.userService.postUser(user).subscribe(res => {
      this.submitting = false;
      const dialog = this.dialog.open(AlertComponent, {
        width: '500px',
        data: {
          title: 'Success',
          text: SIGNUP_SUCCESS_MESSAGE
        }
      });
      dialog.afterClosed().subscribe(() => this.router.navigate(['/login']));
    }, res => {
      this.submitting = false;
      console.log(res.status);
      this.dialog.open(AlertComponent, {
        width: '500px',
        data: {
          title: 'Error',
          text: res.status === 409 ? USER_ALREADY_EXISTS_ERROR_MESSAGE : GENERIC_SIGNUP_ERROR_MESSAGE
        }
      });
    })
  }

  private updateUser(user: User): void {
    this.submitting = true;
    this.userService.updateUser(user).subscribe(res => {
      this.submitting = false;
      const dialog = this.dialog.open(AlertComponent, {
        width: '500px',
        data: {
          title: 'Success',
          text: ACCOUNT_UPDATE_SUCCESS_MESSAGE
        }
      });
    }, res => {
      this.submitting = false;
      console.log(res.status);
      this.dialog.open(AlertComponent, {
        width: '500px',
        data: {
          title: 'Error',
          text: ACCOUNT_UPDATE_SUCCESS_MESSAGE
        }
      });
    })
  }

}
