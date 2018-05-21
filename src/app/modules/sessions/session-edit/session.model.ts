import { Ticket } from '../../ticket/ticket.model';
import { TicketForSession } from '../../hall/model/tictetForSession.model';

export class Session {
  id : number;
  date: string;
  hallId: number;
  movieId: number;
  startTime: string;
  virtualActive: boolean;
  title: string;
  vipPrice: number;
  basePrice: number;
  tickets: Array<TicketForSession>;
}

