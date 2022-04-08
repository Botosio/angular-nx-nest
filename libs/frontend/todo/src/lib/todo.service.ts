import { ITodo } from '@api/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  private hostApi = 'api/'; // ? I thought the proxy was supposed to hit here

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this.hostApi + 'api-todo');
  }

  public getTodo(index: string): Observable<ITodo> {
    return this.httpClient.get<ITodo>(this.hostApi + `api-todo/${index}`);
  }

  public createTodo(form: ITodo): Observable<ITodo> {
    delete form.id;
    return this.httpClient.post<ITodo>(this.hostApi + `api-todo`, form);
  }

  public UpdateTodo(form: ITodo): Observable<ITodo> {
    return this.httpClient.patch<ITodo>(this.hostApi + `api-todo/${form.id}`, form);
  }
}
