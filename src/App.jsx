import { Router, Routes, Route } from 'solid-app-router';
import TodoProvider from './context/todos';
import Logo from './lib/Logo';
import NavLinks from './lib/NavLinks';
import Home from './page/Home';
import Profile from './page/Profile';

const App = () => {
  return (
    <Router>
      <TodoProvider>
        <header className='header'>
          <nav className='header-nav'>
            <Logo />
            <NavLinks />
          </nav>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
        <footer className='footer'>
          <p className='footer-text'>
            Developed with{' '}
            <a
              href='https://www.solidjs.com/'
              target='_blank'
              className='footer-name'
            >
              SolidJs
            </a>
          </p>
        </footer>
      </TodoProvider>
    </Router>
  );
};

export default App;
