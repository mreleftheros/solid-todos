import { createEffect, createSignal, on } from 'solid-js';
import { useTodos } from '../context/todos';
import Todo from '../lib/Todo';

const Profile = () => {
  const { todos, addTodo } = useTodos();
  const [todo, setTodo] = createSignal('');
  const len = () => todos.length;
  let todoInput;

  createEffect(on(addTodo => todoInput.focus()));

  const handleInput = ({ target }) => setTodo(target.value);

  const handleKeyUp = ({ key }) => {
    if (!todo() || key !== 'Enter') return;
    addTodo(todo());
    return setTodo('');
  };

  return (
    <section className='profile'>
      <h2 className='profile-title'>My Todos ( {len()} )</h2>
      <ul className='profile-todos'>
        <For each={todos}>{t => <Todo {...t} />}</For>
        <input
          className='profile-addInput'
          type='text'
          placeholder='Press Enter to add'
          value={todo()}
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          ref={todoInput}
        />
      </ul>
    </section>
  );
};

export default Profile;
