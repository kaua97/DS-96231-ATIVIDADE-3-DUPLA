import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Elenco from './pages/Elenco';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
        <Header />
        <Home/>
        
        <main style={{ flex: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/elenco" element={<Elenco />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}