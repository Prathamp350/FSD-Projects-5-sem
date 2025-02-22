import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Registration';
import Countries from './pages/Countries';
import Destination from './pages/Destinations';
import CityPage from './pages/CityPage'; // Import CityPage


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/destination/:country" element={<Destination />} />
        <Route path="/destination/:country/:state/:city" element={<CityPage />} /> {/* Add CityPage route */}
      </Routes>
    </Router>
  );
};

export default App;
