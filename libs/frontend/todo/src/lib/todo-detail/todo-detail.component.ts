import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '@api/todo';
import { filter, map, switchMap, Observable, of, tap } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'angular-nx-nest-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailComponent implements OnInit {
  public form: FormGroup = this.createForm();
  public item$: Observable<ITodo | null> = of(null);

  constructor(private route: ActivatedRoute, private todoService: TodoService, private formBuilder: FormBuilder, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getToDoItem();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      message: [null, Validators.required],
      done: [true],
      id: []
    });
  }

  private getToDoItem(): void {
    this.route.paramMap.pipe(
      map(param => param.get('id')),
      tap(id => id === 'create' ? this.clearForm(): null),
      filter(id => !!id && id !== 'create'),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      switchMap(id => this.todoService.getTodo(id!)),
      tap(item => this.form.patchValue(item)),
      tap(() => this.changeDetection.markForCheck())
    ).subscribe();
  }

  private clearForm(): void {
    this.form.reset({done: true});
    this.changeDetection.markForCheck();
  }

  public submit():void {
    this.todoService.createTodo(this.form.getRawValue()).pipe(
      tap(todo => this.form.patchValue(todo)),
      tap(() => this.changeDetection.markForCheck())
    ).subscribe();
  }

  public update(): void {
    this.todoService.UpdateTodo(this.form.getRawValue()).pipe(
      tap(todo => this.form.patchValue(todo)),
      tap(() => this.changeDetection.markForCheck())
    ).subscribe();
  }

}
