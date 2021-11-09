import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface';

@Injectable()
export class TicketService {
    private readonly tickets: Ticket[] = [];

      create(ticket: Ticket) : string{
       this.tickets.push(ticket);
       return "the ticket have created already";
      }

    }
