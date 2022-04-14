import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApiTodoController } from './api-todo.controller';
import { ApiTodoService } from './api-todo.service';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Todo])],
  controllers: [ApiTodoController],
  providers: [ApiTodoService],
  exports: [ApiTodoService],
})
export class ApiTodoModule {}
