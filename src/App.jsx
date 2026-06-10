import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Mantos from './pages/Mantos';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
        <Header />
      
        
        <main style={{ flex: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
          </Routes>
          <Mantos/>
          <Historia/>
          
        </main>

        <Footer />
      </div>
    </Router>
  );
}