import { batch, createSignal } from 'solid-js';
import { useTodos } from '../context/todos';

const Todo = props => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [edit, setEdit] = createSignal(null);

  const handleKeyUp = ({ key }) => {
    if (key !== 'Enter' || !edit().text) return;
    return batch(() => {
      updateTodo(props.id, edit().text);
      setEdit(null);
    });
  };

  const handleClick = () => setEdit({ text: props.text });

  const handleInput = ({ target }) => setEdit({ text: target.value });

  return (
    <li className='todo' classList={{ 'todo-done': props.done }}>
      <Show
        when={!edit()}
        fallback={
          <>
            <input
              className='todo-edit'
              type='text'
              value={props.text}
              onKeyUp={handleKeyUp}
              onInput={handleInput}
            />
          </>
        }
      >
        <h3 className='todo-text' onClick={handleClick}>
          {props.text}
        </h3>
      </Show>
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
