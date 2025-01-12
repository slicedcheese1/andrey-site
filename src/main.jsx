import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsSection from './Components/ProjectsSections/ProjectsSection';
import LunariERP from './Pages/LunariERP/LunariERP';
import './index.css';
import Home from './Pages/Home/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lunari-erp" element={<LunariERP />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
