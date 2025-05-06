import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.scss',
})
export class TodoFilterComponent {
  constructor(private _todoService: TodoService) {}

  onFilterChange(value: string) {
    this._todoService.setFilter(value);
  }
}
