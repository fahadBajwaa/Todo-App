import { Component, signal, computed } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  /** raw state*/
  readonly todos = signal<Todo[]>([]);
  readonly filterText = signal<string>('');
  /** derived */
  readonly filteredTodos = computed(() =>
    this.todos().filter((t) =>
      t.title.toLowerCase().includes(this.filterText().toLowerCase())
    )
  );
  readonly remainingCount = computed(
    () => this.todos().filter((t) => !t.completed).length
  );
  /** new todo item name */
  newTitle = '';
  /** methods */
  addTodo() {
    const title = this.newTitle.trim();
    if (!title) return;
    this.todos.update((list) => [
      ...list,
      { id: Date.now(), title, completed: false },
    ]);
    this.newTitle = '';
  }
  toggleTodo(id: number) {
    this.todos.update((list) =>
      list.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }
  removeTodo(id: number) {
    this.todos.update((list) => list.filter((t) => t.id !== id));
  }
  /**  setter for filter, to pass into the child */
  setFilter(value: string) {
    this.filterText.set(value);
  }
}
