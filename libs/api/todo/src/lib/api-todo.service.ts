import { from, map, Observable, of, switchMap, tap } from 'rxjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { wrap } from '@mikro-orm/core';


@Injectable()
export class ApiTodoService {
  constructor(@InjectRepository(Todo) private readonly todoRepository: EntityRepository<Todo>) {}

  create(createTodoDto: CreateTodoDto): Observable<Todo> {
		const task = this.todoRepository.create(createTodoDto);
		return from(this.todoRepository.persistAndFlush(task)).pipe(
			map(() => task)
		);
	}

  findAll(): Observable<Todo[]> {
		return from(this.todoRepository.findAll());
	}

	findOne(id: string): Observable<Todo | null> {
		return from(this.todoRepository.findOne({ id: id }));
	}

	update(id: string, updateTaskDto: UpdateTodoDto): Observable<Todo | null> {
		let myTodo:Todo | null = null;
		return this.findOne(id).pipe(
			tap(item => {
				wrap(item).assign(updateTaskDto);
				myTodo = item;
			}),
			switchMap(() => from(this.todoRepository.flush())),
			map(() => myTodo)
		)
	}

	remove(id: string): Observable<void | number> {
		return from(this.todoRepository.nativeDelete({ id: id }));
	}


}
