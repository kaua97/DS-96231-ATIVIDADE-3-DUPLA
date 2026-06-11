import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Mantos from './pages/Mantos'; // 1. Importando a página de Mantos que faltava

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#000000ff' }}>
        
        {/* O Header fica aqui fixo. Ele carrega os links que mudam a URL */}
        <Header />

        {/* 2. O conteúdo principal agora controla TODAS as páginas dinamicamente */}
        <main style={{ flex: 1, width: '100%', padding: '2rem 0', boxSizing: 'border-box' }}>
          <Routes>
            
            {/* Quando a URL for "/", renderiza apenas a Home */}
            <Route path="/" element={<Home />} />
            
            {/* Quando a URL for "/historia", renderiza apenas a Historia */}
            <Route path="/historia" element={<Historia />} />
            
            {/* Quando a URL for "/mantos", renderiza apenas os Mantos */}
            <Route path="/mantos" element={<Mantos />} />
            
          </Routes>
        </main>

        {/* O Footer fica aqui fixo no final de todas as páginas */}
        <Footer />
        
      </div>
    </Router>
  );
}