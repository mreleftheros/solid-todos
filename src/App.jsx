import { Router, Routes, Route } from 'solid-app-router';
import Logo from './lib/Logo';
import NavLinks from './lib/NavLinks';
import Home from './page/Home';
import Profile from './page/Profile';

const App = () => {
  return (
    <Router>
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
          Developed by <span className='footer-name'>mreleftheros</span>
        </p>
      </footer>
    </Router>
  );
};

export default App;
