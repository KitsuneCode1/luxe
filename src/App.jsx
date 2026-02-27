import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from'./components/Hero/Hero';
import Aura from'./components/Aura/Aura';
import Packages from'./components/Packages/Packages';
import Enterprise from'./components/Enterprise/Enterprise';
import Contact from'./components/Contact/Contact';
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
          <Contact />

          <div className="mt-40
          pb-8 flex flex-col md:flex-row md:items-center  md:justify-between container">
            <span className="text-gray-500">© 2026 Luxe Event Designs by Sarah</span>

            <div className="flex gap-4">
              <a href="#enterprise" className='text-gray-500 hover:text-gray-900 transiton-all duration-300 underline'>Enterprise</a>

              <a href="#packages" className='text-gray-500 hover:text-gray-900 transiton-all duration-300 underline'>Packages</a>

              <a href="#aura" className='text-gray-500 hover:text-gray-900 transiton-all duration-300 underline'>AURA</a>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
