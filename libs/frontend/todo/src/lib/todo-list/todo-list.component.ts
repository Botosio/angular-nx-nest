import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '@api/todo';
import { Observable, of } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'angular-nx-nest-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public list$: Observable<ITodo[]> = of([])

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  public refreshList(): void {
    this.list$ = this.todoService.getList();
  }

}
