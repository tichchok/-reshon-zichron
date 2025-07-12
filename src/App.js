import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmartOfferPreview from './components/SmartOfferPreview';
import OfferView from './components/OfferView';

export default function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Reshon Zichron Devarim Tool</h1>
        <Routes>
          <Route path="/" element={<SmartOfferPreview />} />
          <Route path="/offer/:id" element={<OfferView />} />
        </Routes>
      </div>
    </Router>
  );
  }
