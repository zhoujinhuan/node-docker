import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface';

@Injectable()
export class TicketService {
    private readonly tickets: Ticket[] = [];

      create(ticket: Ticket) {
       return this.tickets.push(ticket);
      }

    }
