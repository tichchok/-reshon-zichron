import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmartOfferPreview from './components/SmartOfferPreview';
import OfferView from './components/OfferView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SmartOfferPreview />} />
        <Route path="/offer/:id" element={<OfferView />} />
      </Routes>
    </Router>
  );
}

export default App;
