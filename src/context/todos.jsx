import { createContext, useContext } from 'solid-js';
import { createTodos } from '../store/todos';

const TodoContext = createContext();

const TodoProvider = props => {
  const { todos, addTodo, deleteTodo, toggleTodo, updateTodo } = createTodos();

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, toggleTodo, updateTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodos = () => useContext(TodoContext);
