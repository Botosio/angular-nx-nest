import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoRoutingModule } from './frontend-todo-routing.module';


@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  exports: [
    TodoRoutingModule,
    TodoComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  providers: [TodoService]
})
export class FrontendTodoModule {}
