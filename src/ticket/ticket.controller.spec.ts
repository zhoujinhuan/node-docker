import { Test, TestingModule } from '@nestjs/testing';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
describe('TicketController', () => {
  let controller: TicketController;
  let elementId;
  const express = require('express');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [TicketService],
    }).compile();

    controller = module.get<TicketController>(TicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


   const ticket = {
    "name":"ticket2",
     "id":2,
     "detail":"ticket have been created"
      };

    test('given valid ticket when then',() =>{
//         const result ="the ticket testing id ok";
//         TicketService.create.mockResolvedValue(result);
        expect(controller.create(ticket)).toEqual('the ticket have created already');
    });
});
