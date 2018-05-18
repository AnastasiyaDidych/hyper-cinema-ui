import { Pipe, PipeTransform } from "@angular/core";
import { Ticket } from "../ticket.model";

@Pipe({
    name: 'ticketFilter'
})
export class FilmPipe implements PipeTransform {

    transform(tickets: Ticket[], attr1: string, attr2: string) {
        // if (!value) return tickets;
        return tickets.filter(ticket => {
            return ticket.filmName.includes(attr1) && ticket.hallName.includes(attr2);
        })
    }
    
}