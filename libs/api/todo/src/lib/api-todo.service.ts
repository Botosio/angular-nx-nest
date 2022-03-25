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
  /* private readonly todos: ITodo[] = [
    { message: 'Take out trash', done: false },
    { message: 'Continue using Nx', done: false },
  ];
 */
  constructor(@InjectRepository(Todo) private readonly todoRepository: EntityRepository<Todo>) {}

  /* getTodos(): ITodo[] {
    return this.todos;
  }

  async getTodoByIndex(index: number): Promise<ITodo | undefined> {
		return await this.todos[index];
	}

  getTodo(index: number): Observable<ITodo> {
		return  of(this.todos[index]).pipe(
      map(item => {
        if(!item) throw new NotFoundException()
        return item;
      })
    );
	} */

/*  async create(createTaskDto: CreateTaskDto): Promise<Task> {
		const task = this.taskRepository.create(createTaskDto);
		await this.taskRepository.persistAndFlush(task);

		return task;
	}
 */

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
	/* 	const task = await this.findOne(id);
		wrap(task).assign(updateTaskDto);
		await this.todoRepository.flush();

		return task; */
	}

	remove(id: string): Observable<void | number> {
		return from(this.todoRepository.nativeDelete({ id: id }));
	}


}
