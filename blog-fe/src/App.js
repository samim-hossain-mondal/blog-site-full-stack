import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/elements/Navbar';
import Blog from './routes/Blog';
import About from './routes/About';
import Contact from './routes/Contact';
import PageNotFoundError from './routes/PageNotFoundError';
import Footer from './components/elements/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFoundError />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
