import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from'./components/Hero/Hero';
import Aura from'./components/Aura/Aura';
import Packages from'./components/Packages/Packages';
import Enterprise from'./components/Enterprise/Enterprise';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-background">
          <Navbar />
          <Hero />
          <Aura />
          <Packages />
          <Enterprise />
        </div>
      </Router>
    </>
  )
}

export default App
