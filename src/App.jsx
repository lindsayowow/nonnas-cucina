import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuildADish from './pages/BuildADish';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './pages/Order';
import ScrollToTop from './components/ScrollToTop';
import { DishBuilderProvider } from './context/DishBuilderContext'; 
import './App.css';

function App() {
  return (
    <div className="app-shell">

      <DishBuilderProvider>
        <Header />
        <ScrollToTop />

        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buildadish" element={<BuildADish />} />
            <Route path="/cart" element={<Order />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </DishBuilderProvider>

    </div>
  );
}

export default App;