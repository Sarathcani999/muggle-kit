import { Dispatcher } from '@sarathcani999/mugglekit';


export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoDispatcher = new Dispatcher();

let nextId = 1;
let todos: Todo[] = [];

todoDispatcher.subscribe('addTodo', (text: string) => {
  todos = [...todos, { id: nextId++, text, completed: false }];
  todoDispatcher.dispatch('update', todos);
});

todoDispatcher.subscribe('toggleTodo', (id: number) => {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  todoDispatcher.dispatch('update', todos);
});

todoDispatcher.subscribe('deleteTodo', (id: number) => {
  todos = todos.filter((todo) => todo.id !== id);
  todoDispatcher.dispatch('update', todos);
});

export const getTodos = () => todos; 