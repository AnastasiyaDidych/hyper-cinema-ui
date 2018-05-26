import { TicketForSession } from "../../hall/model/tictetForSession.model";

export class Session {
  id : number;
  date: string;
  hallId: number;
  movieId: number;
  startTime: string;
  virtualActive: boolean;
  active:boolean;
  vipPrice: number;
  basePrice: number;
  tickets:Array<TicketForSession>;
  movieImageUrl: string;
}