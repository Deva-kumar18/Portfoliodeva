import { useState } from 'react';
import './App.css';
import HAM from './Assets/hamburger.png'
import CROSS from './Assets/cross.png'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Skills/>
     <Projects/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
