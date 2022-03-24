import { Todo } from '@api/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private hostApi = 'api/'; // ? I thought the proxy was supposed to hit here

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.hostApi + 'api-todo');
  }

  public getTodo(index: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.hostApi + `api-todo/${index}`);
  }
}
