import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Hall } from '../../model/hall.model';
import { ShortHall } from '../../model/short-hall.model';
import { HallService, successAction } from '../../hall.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/security/auth.service';

@Component({
    selector: 'app-alert-component',
    templateUrl: './hall-create-alert.component.html',
    styleUrls: ['./hall-create-alert.component.css']
})
export class HallCreateAlertComponent {

    ngOnInit() {
        this.initForm();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    get formControls() {
        return this.hallForm.controls;
      }

    message: string;
    hallPage: boolean;
    hallForm: FormGroup;
    successCreate: Array<any> = [];

    constructor(
        public authService: AuthService,
        private hallService: HallService,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<HallCreateAlertComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string) { }

    public createHall(hall: ShortHall) {
        this.hallService.saveHall(hall).subscribe(
            (success) => {
                var checkPoint = "created";
                this.successCreate.push(checkPoint);
                localStorage.setItem(successAction, JSON.stringify(this.successCreate));
                this.dialogRef.close();
            },
            (error) => {
              this.message = "ERROR";
            }
          );

    }



    public submitCreateHall(): void {
        const newHall: ShortHall = {
            capacity: this.hallForm.get('capacity').value,
            tech: this.hallForm.get('tech').value,
            name: this.hallForm.get('hallName').value,
        }
        this.createHall(newHall);
    }


    private initForm(): void {
        this.hallForm = this.formBuilder.group({
            hallName: ['', Validators.required],
            capacity: ['', Validators.required],
            tech: ['', Validators.required],
        });
    }



}
