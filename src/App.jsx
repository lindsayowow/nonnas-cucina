import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BuildADish from './pages/BuildADish';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buildadish" element={<BuildADish />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;