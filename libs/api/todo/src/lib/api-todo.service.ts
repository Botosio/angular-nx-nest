import { map, Observable, of } from 'rxjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { ITodo } from './api-todo.interface';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Injectable()
export class ApiTodoService {
  private readonly todos: ITodo[] = [
    { message: 'Take out trash', done: false },
    { message: 'Continue using Nx', done: false },
  ];

  constructor(@InjectRepository(Todo) private readonly todoRepository: EntityRepository<ITodo>) {}

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

  create(createTodoDto: CreateTodoDto): Observable<ITodo> {
		const task = this.todoRepository.create(createTodoDto);
		this.todoRepository.persistAndFlush(task);

		return task;
	}

  findAll(): Observable<ITodo[]> {
		return await this.todoRepository.findAll();
	}

	findOne(id: string): Observable<ITodo> {
		return await this.todoRepository.findOne({ id: id });
	}

	update(id: string, updateTaskDto: UpdateTodoDto): Observable<ITodo> {
		const task = await this.findOne(id);
		wrap(task).assign(updateTaskDto);
		await this.todoRepository.flush();

		return task;
	}

	remove(id: string): Observable<void> {
		await this.todoRepository.nativeDelete({ id: id });
	}


}
