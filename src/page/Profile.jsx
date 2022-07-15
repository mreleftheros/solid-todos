import { createSignal } from 'solid-js';
import { useTodos } from '../context/todos';
import Todo from '../lib/Todo';

const Profile = () => {
  let todoInput;
  const { todos, addTodo } = useTodos();
  const [todo, setTodo] = createSignal('');
  const [filter, setFilter] = createSignal('all');
  const filtered = () =>
    filter() === 'done'
      ? todos.filter(t => t.done)
      : filter() === 'undone'
      ? todos.filter(t => !t.done)
      : false;
  const len = () => todos.length;

  const handleInput = ({ target }) => setTodo(target.value);

  const handleKeyUp = ({ key }) => {
    if (!todo() || key !== 'Enter') return;
    addTodo(todo());
    return setTodo('');
  };

  return (
    <section className='profile'>
      <h2 className='profile-title'>My Todos {len() > 0 && `( ${len()} )`}</h2>
      <div className='profile-filters'>
        <button
          type='button'
          className='profile-filter'
          classList={{ 'profile-filter--active': filter() === 'all' }}
          onClick={[setFilter, 'all']}
        >
          All
        </button>
        <button
          type='button'
          className='profile-filter'
          classList={{ 'profile-filter--active': filter() === 'undone' }}
          onClick={[setFilter, 'undone']}
        >
          Active
        </button>
        <button
          type='button'
          className='profile-filter'
          classList={{ 'profile-filter--active': filter() === 'done' }}
          onClick={[setFilter, 'done']}
        >
          Completed
        </button>
      </div>
      <ul className='profile-todos'>
        <For each={filtered() || todos}>{t => <Todo {...t} />}</For>
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
