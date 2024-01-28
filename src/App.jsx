import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './Pages/Home';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './Pages/AboutPage';
import Career from './Pages/Career';
import ServicePage from './Pages/Service';
import ContactPage from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
