import { ApiTodoModule } from '@api/todo';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiTodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
