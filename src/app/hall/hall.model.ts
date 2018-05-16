import{Seat} from "./seat.model"
export class Hall {
    name: string;
    capacity: number;
    type: string;
    tech: string;
    seats: Array<Seat>;
  }