import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ITodo } from '@api/todo';
import { Observable, of, tap } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'angular-nx-nest-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public displayedColumns: string[] = ['message', 'done'];
  public dataSource: MatTableDataSource<ITodo> = new MatTableDataSource<ITodo>([]);

  // public list$: Observable<ITodo[]> = of([])

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public refreshList(): void {
    // this.list$ = this.todoService.getList();
    this.todoService.getList().pipe(
      //tap(list => this.dataSource = new MatTableDataSource<ITodo>(list))
      tap(list => this.dataSource.data = list)
    ).subscribe()

  }

}
