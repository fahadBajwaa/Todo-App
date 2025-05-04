import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  toggle(id: number) {
    this.todoService.toggleTodo(id);
  }

  remove(id: number) {
    this.todoService.removeTodo(id);
  }
}