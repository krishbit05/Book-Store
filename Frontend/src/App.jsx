import React from 'react';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';

import Footer from './components/Footer'
import Freebooks from './components/Freebooks'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Signup from './signup/Signup';
import Contact from './contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;