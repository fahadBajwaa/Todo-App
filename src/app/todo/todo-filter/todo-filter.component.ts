import { Component, input } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.scss',
})
export class TodoFilterComponent {
  /** Parent passes a Signal<string> here */
  readonly filterText = input<string>('');
  /** Parent passes a setter callback to update the filter */
  readonly onFilterChange = input.required<(value: string) => void>();
}
