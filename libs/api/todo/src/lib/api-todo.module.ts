import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApiTodoController } from './api-todo.controller';
import { ApiTodoService } from './api-todo.service';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Todo])], // Note that entities that aren't registered through the forFeature() method, but are only referenced from the entity (via a relationship), won't be included by way of the autoLoadEntities setting.
  controllers: [ApiTodoController],
  providers: [ApiTodoService],
  exports: [ApiTodoService],
})
export class ApiTodoModule {}
