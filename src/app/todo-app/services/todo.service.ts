import { Injectable, signal, computed, effect } from '@angular/core';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = signal<Todo[]>([]);
  private filterText = signal('');
  
  filteredTodos = computed(() =>
    this.todos().filter(todo =>
      todo.title.toLowerCase().includes(this.filterText().toLowerCase())
    )
  );
  remainingCount = computed(() =>
    this.todos().filter(todo => !todo.completed).length
  );
  constructor() {
    effect(() => {
      console.log('Current todos:', this.todos());
    });
  }
  addTodo(title: string) {
    this.todos.update(todos => [
      ...todos,
      { id: Date.now(), title, completed: false }
    ]);
  }
  toggleTodo(id: number) {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  removeTodo(id: number) {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }
  setFilter(text: string) {
    this.filterText.set(text);
  }
}