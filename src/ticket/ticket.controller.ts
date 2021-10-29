import { Controller, Post,Body } from '@nestjs/common';
import { TicketService } from './ticket.service';
@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService){}

   @Post('/create')
    create(@Body('ticket') ticket){
    this.ticketService.create(ticket);
    }

}
