import React from 'react';
import { Navbar, Home, Footer } from './components';

const App = () => {
  return (
    <div className='w-screen md:h-screen mx-auto overflow-x-hidden'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;