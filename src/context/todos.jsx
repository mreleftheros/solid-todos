import { createContext, useContext } from 'solid-js';
import { useTodoStore } from '../store/todos';

const TodoContext = createContext();

const TodoProvider = props => {
  const { todos, len, addTodo, deleteTodo, toggleTodo } = useTodoStore();

  return (
    <TodoContext.Provider
      value={{ todos, len, addTodo, deleteTodo, toggleTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodos = () => useContext(TodoContext);
