import { Controller, Get, Param } from '@nestjs/common';
import { Todo } from './api-todo.interface';
import { ApiTodoService } from './api-todo.service';

@Controller('api-todo')
export class ApiTodoController {
  constructor(private apiTodoService: ApiTodoService) {}

  @Get()
	async findAll(): Promise<Todo[]> {
		return await this.apiTodoService.getTodos();
	}

	@Get(':index')
	async findOne(@Param('index') index: number): Promise<Todo | undefined> {
		return await this.apiTodoService.getTodoByIndex(index);
	}
}
