import { Observable } from 'rxjs';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ITodo } from './api-todo.interface';
import { ApiTodoService } from './api-todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('api-todo')
export class ApiTodoController {
  constructor(private apiTodoService: ApiTodoService) {}
/*
  @Get()
	findAll(): Observable<ITodo[]> {
		return this.apiTodoService.getTodos();
	}


  @Get(':index')
	findOne(@Param('index') index: number): Observable<ITodo> {
		return this.apiTodoService.getTodo(index);
	} */

	@Post()
	create(@Body() createTaskDto: CreateTodoDto): Observable<Todo> {
		return this.apiTodoService.create(createTaskDto);
	}

	@Get()
	findAll(): Observable<Todo[]> {
		return this.apiTodoService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Observable<Todo | null> {
		return this.apiTodoService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateTaskDto: UpdateTodoDto): Observable<Todo | null> {
		return this.apiTodoService.update(id, updateTaskDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Observable<void | number> {
		return this.apiTodoService.remove(id);
	}
}
