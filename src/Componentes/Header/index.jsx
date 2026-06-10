import { Link } from 'react-router-dom';
import './style.css'; // Importando o CSS aqui

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>EC <span>Vitória</span> Hub</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home 🦁​</Link></li>
          <li><Link to="/historia" className="nav-link">História🖤​</Link></li>
          <li><Link to="/Mantos" className="nav-link">Mantos​❤️​</Link></li>
        </ul>
      </nav>
    </header>
  );
}