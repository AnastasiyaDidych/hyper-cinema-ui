import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Hall } from '../../model/hall.model';

@Component({
    selector: 'app-alert-component',
    templateUrl: './hall-create-alert.component.html',
    styleUrls: ['./hall-create-alert.component.css']
})
export class HallCreateAlertComponent {

    constructor(
        public dialogRef: MatDialogRef<HallCreateAlertComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string) { }


    // public createHall(hall: Hall){
        
    // }

    // public createHall(hall: ShortHall) {
    //     this.hallService.saveHall(hall).subscribe(res => {
    //       const dialog = this.dialog.open(HallCreateAlertComponent, {
    //         width: '500px',
    //         data: {
    //           title: 'Success',
    //         }
    //       });
    //       dialog.afterClosed().subscribe(() => this.router.navigate(['/login']));
    //     })
    //   }
    
    
    
    //   public submitCreateHall(): void {
    //     const newHall: ShortHall = {
    //       capacity: this.hallForm.get('capacity').value,
    //       tech: this.hallForm.get('tech').value,
    //       name: this.hallForm.get('hallName').value,
    //     }
    //     this.createHall(newHall);
    //   }
    // }
}