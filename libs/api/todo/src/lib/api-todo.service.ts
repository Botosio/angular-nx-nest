import { Injectable } from '@nestjs/common';
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
}
