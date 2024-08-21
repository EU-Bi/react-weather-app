import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CityPage } from './pages/CityPage/CityPage';
import { Header } from './UI/Header/Header';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<CityPage />} />
      </Routes>
    </div>
  );
}

export default App;
