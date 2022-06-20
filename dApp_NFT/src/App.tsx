import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components';
import { NftPage } from './pages/Nft';
import { FaqPage } from './pages/Faq';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<NftPage />} />
          <Route path="/nft" element={<NftPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<main>Not Found 404!</main>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
