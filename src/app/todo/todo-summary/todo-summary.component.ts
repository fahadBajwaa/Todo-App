import { Component, input } from '@angular/core';
import type { Signal } from '@angular/core';

@Component({
  selector: 'app-todo-summary',
  templateUrl: './todo-summary.component.html',
  styleUrl: './todo-summary.component.scss',
})
export class TodoSummaryComponent {
  /** Parent passes a Signal<number> here */
  readonly remaining = input.required<Signal<number>>();
}
