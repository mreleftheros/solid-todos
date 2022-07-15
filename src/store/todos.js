import { createEffect, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';

export const createTodos = () => {
  const [todos, setTodos] = createStore([]);
  const len = () => todos.length;
  const id = () => (len() === 0 ? 0 : Math.max(...todos.map(t => t.id)) + 1);

  onMount(
    () =>
      localStorage.todos && setTodos(JSON.parse(localStorage.getItem('todos')))
  );

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
