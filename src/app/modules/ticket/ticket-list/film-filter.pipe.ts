import { Pipe, PipeTransform } from "@angular/core";
import { Ticket } from "../ticket.model";

@Pipe({
    name: 'ticketFilter'
})
export class FilmPipe implements PipeTransform {

    transform(tickets: any, attr1: any, attr2: any, attr3: any) {
        return tickets.filter(ticket => {
            return ticket.filmName.includes(attr1) 
            && ticket.userEmail.includes(attr2) 
            && ticket.sessionDate.includes(attr3);
        })
    }
    
}