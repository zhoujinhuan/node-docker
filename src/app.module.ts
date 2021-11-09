import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
   imports: [UserModule,TicketModule],
   controllers: [AppController],
   providers: [AppService],

})
export class AppModule {}

