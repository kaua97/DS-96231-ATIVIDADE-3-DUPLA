import './style.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#e11d48', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Podem colocar o escudo do Vitória aqui */}
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>EC Vitória Hub</h1>
      </div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
          <li><Link to="/historia" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>História</Link></li>
          <li><Link to="/elenco" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Elenco</Link></li>
        </ul>
      </nav>
    </header>
  );
}