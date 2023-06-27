import React from 'react';
import Bot from './Pages/Bot';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bot" element={<Bot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
