import { Pipe, PipeTransform } from "@angular/core";
import { Session } from "protractor";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    
    transform(schedule,value){
        if(!value) return schedule;
        return schedule.filter(schedule =>{
            return schedule.localDate.includes(value)
        })
    }

}