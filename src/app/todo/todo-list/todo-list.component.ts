import { Component, input } from '@angular/core';
import type { Signal } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  /** Parent passes a Signal<Todo[]> */
  readonly todos = input.required<Signal<Todo[]>>();
  /** Parent passes callbacks for actions */
  readonly toggle = input.required<(id: number) => void>();
  readonly remove = input.required<(id: number) => void>();
}
