import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrl: './todo-summary.component.scss',
})
export class TodoSummaryComponent {
  constructor(public todoService: TodoService) {}
}