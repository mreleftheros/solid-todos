import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

export const createTodos = initial => {
  const stored = localStorage.todos;
  const [todos, setTodos] = createStore(
    stored ? JSON.parse(localStorage.getItem('todos')) : initial
  );
  const len = () => todos.length;
  const id = () => (len() === 0 ? 0 : Math.max(...todos.map(t => t.id)) + 1);

  createEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  const addTodo = text =>
    setTodos(prev => [{ id: id(), text, done: false }, ...prev]);

  const deleteTodo = id => setTodos(prev => prev.filter(t => t.id !== id));

  const toggleDone = id =>
    setTodos(
      t => t.id === id,
      'done',
      done => !done
    );

  const updateTodo = (id, text) => setTodos(t => t.id === id, 'text', text);

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleDone,
    updateTodo,
  };
};
