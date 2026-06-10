import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
<<<<<<< HEAD
import Mantos from './pages/Mantos';
=======
import Mantos from './pages/Mantos'; // 1. Importando a página de Mantos que faltava
>>>>>>> f1051282f4aa8b50cd0a9926c110f628c841c014

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
<<<<<<< HEAD
        <Header />
      
=======
>>>>>>> f1051282f4aa8b50cd0a9926c110f628c841c014
        
        {/* O Header fica aqui fixo. Ele carrega os links que mudam a URL */}
        <Header />

        {/* 2. O conteúdo principal agora controla TODAS as páginas dinamicamente */}
        <main style={{ flex: 1, padding: '2rem' }}>
          <Routes>
            {/* Quando a URL for "/", renderiza apenas a Home */}
            <Route path="/" element={<Home />} />
            
            {/* Quando a URL for "/historia", renderiza apenas a Historia */}
            <Route path="/historia" element={<Historia />} />
            
            {/* Quando a URL for "/mantos", renderiza apenas os Mantos */}
            <Route path="/mantos" element={<Mantos />} />
          </Routes>
          <Mantos/>
          <Historia/>
          
        </main>

        {/* O Footer fica aqui fixo no final de todas as páginas */}
        <Footer />
        
      </div>
    </Router>
  );
}