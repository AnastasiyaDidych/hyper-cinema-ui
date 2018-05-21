import { Pipe, PipeTransform } from "@angular/core";
import { Session } from "../session-edit/session.model";

@Pipe({
    name: 'filterd'
})

export class FilterPipe implements PipeTransform {
    
    transform(schedule,value){
        if(!value) return schedule;
        return schedule.filter(schedule =>{
            return schedule.localDate.includes(value)
        })
    }

}