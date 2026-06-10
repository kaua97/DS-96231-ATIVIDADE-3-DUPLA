import './style.css'; // Importando o CSS aqui

export default function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} - Desenvolvido por Torcedores do Leão da Barra
      </p>
      <span className="footer-slogan">
        🔴⚫ Sou Vermelho e Preto, Sou Tradição! ⚫🔴
      </span>
    </footer>
  );
}