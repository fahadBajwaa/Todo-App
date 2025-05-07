import { Injectable, signal, computed, effect } from '@angular/core';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos = signal<Todo[]>([]);
  private _filterText = signal('');
  
  filteredTodos = computed(() =>
    this._todos().filter(todo =>
      todo.title.toLowerCase().includes(this._filterText().toLowerCase())
    )
  );
  remainingCount = computed(() =>
    this._todos().filter(todo => !todo.completed).length
  );
  constructor() {
    effect(() => {
      console.log('Current todos:', this._todos());
    });
  }
  addTodo(title: string) {
    this._todos.update(_todos => [
      ..._todos,
      { id: Date.now(), title, completed: false }
    ]);
  }
  toggleTodo(id: number) {
    this._todos.update(_todos =>
      _todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  removeTodo(id: number) {
    this._todos.update(_todos => _todos.filter(todo => todo.id !== id));
  }
  setFilter(text: string) {
    this._filterText.set(text);
  }
}