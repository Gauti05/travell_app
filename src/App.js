import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Transfers from './pages/Transfers';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const navItems = [
    {name: 'Home', path: '/'},
    {name: 'About Us', path: '/about'},
    {name: 'Tours & Experiences', path: '/tours'},
    {name: 'Airport Transfers', path: '/transfers'},
    {name: 'Gallery', path: '/gallery'},
    {name: 'FAQ', path: '/faq'},
    {name: 'Contact', path: '/contact'},
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-800 text-white p-4 flex flex-wrap justify-center gap-6 sticky top-0 z-10">
        {navItems.map(({name, path}) => (
          <NavLink 
            key={name} 
            to={path} 
            className={({isActive}) => `capitalize hover:text-yellow-400 ${isActive ? 'underline' : ''}`}
            end={path === '/'}
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add 404 Not Found route if preferred */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

