import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import ChenglongShowroom from './pages/ChenglongShowroom';
import ChenglongTractor from './pages/ChenglongTractor';
import ChenglongCargo from './pages/ChenglongCargo';
import ChenglongDump from './pages/ChenglongDump';
import ChenglongElectric from './pages/ChenglongElectric';
import AumanShowroom from './pages/AumanShowroom';
import AumanTractor from './pages/AumanTractor';
import AumanCargo from './pages/AumanCargo';
import AumanDump from './pages/AumanDump';
import AumanElectric from './pages/AumanElectric';
import BuyingService from './pages/BuyingService';
import FinanceService from './pages/FinanceService';
import MaintenanceService from './pages/MaintenanceService';
import Parts from './pages/Parts';
import About from './pages/About';
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
            <Route path="/models/chenglong/tractor" element={<ChenglongTractor />} />
            <Route path="/models/chenglong/cargo" element={<ChenglongCargo />} />
            <Route path="/models/chenglong/dump" element={<ChenglongDump />} />
            <Route path="/models/chenglong/electric" element={<ChenglongElectric />} />
            <Route path="/models/auman" element={<AumanShowroom />} />
            <Route path="/models/auman/tractor" element={<AumanTractor />} />
            <Route path="/models/auman/cargo" element={<AumanCargo />} />
            <Route path="/models/auman/dump" element={<AumanDump />} />
            <Route path="/models/auman/electric" element={<AumanElectric />} />
            <Route path="/buying-service" element={<BuyingService />} />
            <Route path="/services/finance" element={<FinanceService />} />
            <Route path="/services/maintenance" element={<MaintenanceService />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
