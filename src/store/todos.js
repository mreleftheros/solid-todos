import { createStore } from 'solid-js/store';

export const useTodoStore = () => {
  const [todos, setTodos] = createStore([]);
  const len = () => todos.length;
  const id = () => (len() === 0 ? 0 : Math.max(...todos.map(t => t.id)) + 1);

  const addTodo = text =>
    setTodos(prev => [{ id: id(), text, done: false }, ...prev]);

  const deleteTodo = id => setTodos(prev => prev.filter(t => t.id !== id));

  const toggleTodo = id =>
    setTodos(
      t => t.id === id,
      'done',
      done => !done
    );

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};
