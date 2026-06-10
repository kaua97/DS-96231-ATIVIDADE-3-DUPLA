    import './style.css';

    export default function Home() {
    return (
        <div className="vitoria-theme">

        <main className="hero-container">
            <div className="hero-content">
            <span className="badge">Sou Mais Vitória</span>
            <h1>O ÚNICO HEXA CAMPEÃO<br /><span>DO NORDESTE</span></h1>
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