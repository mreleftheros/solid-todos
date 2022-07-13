import { Router, Routes, Route } from 'solid-app-router';
import About from './page/About';
import Home from './page/Home';

const App = () => {
  return (
    <Router>
      <header className='header'></header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
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
