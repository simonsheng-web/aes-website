import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import HomeProductPage from './pages/products/Home';
import OutdoorProductPage from './pages/products/Outdoor';
import VisualDevicesProductPage from './pages/products/VisualDevices';
import WearablesProductPage from './pages/products/Wearables';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-primary-500 selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products/home" element={<HomeProductPage />} />
            <Route path="/products/outdoor" element={<OutdoorProductPage />} />
            <Route path="/products/visual-devices" element={<VisualDevicesProductPage />} />
            <Route path="/products/wearables" element={<WearablesProductPage />} />
            {/* Fallback route to ensure content is always displayed */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;