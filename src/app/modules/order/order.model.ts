import { Ticket } from "../ticket/ticket.model";

export class Order{
    id: number;
    price: number;
    tickets: Ticket[];
}
