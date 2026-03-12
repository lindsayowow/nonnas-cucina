import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BuildADish from './components/BuildADish';
import About from './components/About';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buildadish" element={<BuildADish />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;