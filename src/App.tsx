import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import ChenglongShowroom from './pages/ChenglongShowroom';
import AumanShowroom from './pages/AumanShowroom';
import BuyingService from './pages/BuyingService';
import Parts from './pages/Parts';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/chenglong" element={<ChenglongShowroom />} />
            <Route path="/models/auman" element={<AumanShowroom />} />
            <Route path="/buying-service" element={<BuyingService />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
