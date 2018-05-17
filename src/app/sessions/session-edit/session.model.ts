import { Ticket } from "../../ticket/ticket.component";

export class Session {
    id : number;
    date: string;
    hallId: number;
    movieId: number;
    startTime: string;
    virtualActive: boolean;
    tickets: Array<Ticket>;
  }