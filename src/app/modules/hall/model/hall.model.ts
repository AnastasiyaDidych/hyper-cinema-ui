import { Seat } from "./seat.model"
export class Hall {
  id: number;
  name: string;
  capacity: number;
  type: string;
  tech: string;
  seats: Array<Seat>;
}