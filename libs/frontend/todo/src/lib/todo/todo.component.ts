import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ITodo } from '@api/todo';
import { of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { TodoService } from '../todo.service';

@Component({
  selector: 'angular-nx-nest-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  public todoList: ITodo[] = []
  public todoItem: ITodo | null = null;

  constructor(private todoService: TodoService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this.todoService.getList().pipe(
      tap(list => this.todoList = list),
      tap(() => this.changeDetectorRef.detectChanges())
    ).subscribe();
  }

  public getTodo(guid: string): void {
    if (guid) {
      this.todoService.getTodo(guid).pipe(
        tap(item => this.todoItem = item),
        catchError((error:any) => {
          this.todoItem = null;
          return of(error.statusText)
        }),
        finalize(() => this.changeDetectorRef.detectChanges())
      ).subscribe();
    }

  }

}
