import { Ticket } from '../../ticket/ticket.model';

export class Session {
  id : number;
  date: string;
  hallId: number;
  movieId: number;
  startTime: string;
  virtualActive: boolean;
}
