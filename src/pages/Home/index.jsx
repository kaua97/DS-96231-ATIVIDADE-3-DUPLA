    import './style.css';

    export default function Home() {
    return (
        <div className="vitoria-theme">
        <nav className="navbar">
            <div className="logo">EC VITÓRIA</div>
            <div className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">História</a>
            <a href="#">Mantos</a>
            </div>
        </nav>

        <main className="hero-container">
            <div className="hero-content">
            <span className="badge">Sou Mais Vitória</span>
            <h1>O ÚNICO CAMPEÃO <br /><span>DA TERRA</span></h1>
            <p>Sinta a energia da maior torcida do Norte-Nordeste. O Barradão te espera.</p>
            <button className="btn-primary">Seja Sócio Avante</button>
            </div>
            <div className="hero-image-slot">
            {/* Aqui entraria a foto do Barradão ou do escudo */}
            <div className="floating-badge">1899</div>
            </div>
        </main>
        </div>
    );
    }