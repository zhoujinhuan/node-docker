import { Test, TestingModule } from '@nestjs/testing';
import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let service: TicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketService],
    }).compile();

    service = module.get<TicketService>(TicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

    const ticket = {
    "name":"ticket2",
     "id":2,
     "detail":"ticket have been created"
      };

  test('create ticket ',() =>{
    const result = service.create(ticket);
    expect(result).toEqual('the ticket have created already');
    });
})
