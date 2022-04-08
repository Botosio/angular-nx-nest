import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {
    path: '', component: TodoListComponent,
    children: [
      { path: ':id', component: TodoDetailComponent },
      { path: 'create', component: TodoDetailComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
