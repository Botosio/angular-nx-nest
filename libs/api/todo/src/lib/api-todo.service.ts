import { map, Observable, of } from 'rxjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './api-todo.interface';


@Injectable()
export class ApiTodoService {
  private readonly todos: Todo[] = [
    { message: 'Take out trash', done: false },
    { message: 'Continue using Nx', done: false },
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  async getTodoByIndex(index: number): Promise<Todo | undefined> {
		return await this.todos[index];
	}

  getTodo(index: number): Observable<Todo> {
		return  of(this.todos[index]).pipe(
      map(item => {
        if(!item) throw new NotFoundException()
        return item;
      })
    );
	}
}
