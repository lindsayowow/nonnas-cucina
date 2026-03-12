import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BuildADish from './components/BuildADish';
import About from './components/About';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header />
    <div className="App">
      <h1>Nonna's Cucina</h1>

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