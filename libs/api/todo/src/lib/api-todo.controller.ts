import { Observable } from 'rxjs';
import { Controller, Get, Param } from '@nestjs/common';
import { ITodo } from './api-todo.interface';
import { ApiTodoService } from './api-todo.service';

@Controller('api-todo')
export class ApiTodoController {
  constructor(private apiTodoService: ApiTodoService) {}

  @Get()
	async findAll(): Promise<ITodo[]> {
		return await this.apiTodoService.getTodos();
	}

	/* @Get(':index')
	async findOne(@Param('index') index: number): Promise<Todo | undefined> {
		return await this.apiTodoService.getTodoByIndex(index);
	} */

  @Get(':index')
	findOne(@Param('index') index: number): Observable<ITodo> {
		return this.apiTodoService.getTodo(index);
	}
}
