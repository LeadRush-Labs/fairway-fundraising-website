import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetSponsorships from './pages/GetSponsorships';
import About from './components/About';
import WhatToExpect from './pages/WhatToExpect';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-sponsorships" element={<GetSponsorships />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-to-expect" element={<WhatToExpect />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
