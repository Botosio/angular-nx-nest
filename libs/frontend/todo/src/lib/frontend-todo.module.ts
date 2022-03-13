import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo/todo.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    TodoComponent
  ],
  exports: [
    TodoComponent
  ],
  providers: [TodoService]
})
export class FrontendTodoModule {}
