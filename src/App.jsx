import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './Pages/Home';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './Pages/AboutPage';
import Career from './Pages/Career';
import ServicePage from './Pages/Service';
import ContactPage from './Pages/Contact';
import { Toaster } from 'react-hot-toast';
import FraudTrafficPolicy from './Pages/FraudTrafficPolicy';
import GlobalPresence from './Pages/GlobalPresence';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<Career />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/fraud-traffic-policy" element={<FraudTrafficPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
