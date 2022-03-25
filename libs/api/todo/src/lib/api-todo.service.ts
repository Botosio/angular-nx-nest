import { map, Observable, of } from 'rxjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { ITodo } from './api-todo.interface';
import { Todo } from './entities/todo.entity';


@Injectable()
export class ApiTodoService {
  private readonly todos: ITodo[] = [
    { message: 'Take out trash', done: false },
    { message: 'Continue using Nx', done: false },
  ];

  constructor(@InjectRepository(Todo) private readonly todoRepository: EntityRepository<ITodo>) {}

  getTodos(): ITodo[] {
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
	}
}
