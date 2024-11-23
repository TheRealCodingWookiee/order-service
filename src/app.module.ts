import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderingModule } from './ordering/ordering.module';

@Module({
  imports: [
    OrderingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
