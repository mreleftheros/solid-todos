import { useTodos } from '../context/todos';

const Todo = props => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className='todo' classList={{ 'todo-done': props.done }}>
      <h3 className='todo-text'>{props.text}</h3>
      <div className='todo-tools'>
        <button className='todo-tool' onClick={[toggleTodo, props.id]}>
          {props.done ? '✗' : '🗸'}
        </button>
        <button className='todo-tool'>✎</button>
        <button className='todo-tool' onClick={[deleteTodo, props.id]}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default Todo;
