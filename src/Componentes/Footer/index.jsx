import './style.css'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#9ca3af', textPadding: '1rem', textAlign: 'center', padding: '1rem', marginTop: 'auto' }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} - Desenvolvido por KAUA E BRUNO ,Socios do Leão da Barra</p>
      <small style={{ color: '#e11d48' }}>Sou Vermelho e Preto, Sou Tradição!</small>
    </footer>
  );
}