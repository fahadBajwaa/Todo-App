import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss',
})
export class TodoAppComponent {
  newTitle = '';
  constructor(private _todoService: TodoService) {}

  addTodo() {
    if (this.newTitle.trim()) {
      this._todoService.addTodo(this.newTitle);
      this.newTitle = '';
    }
  }
}
