    import './style.css';

    export default function Home() {
    return (
        <div className="vitoria-theme">
        <main className="hero-container">
            <div className="hero-content">
            <span className="badge">Sou Mais Vitória</span>
            <h1>O ÚNICO HEXA CAMPEÃO<br /><span>DO NORDESTE</span></h1>
            <p>Sinta a energia da maior torcida do Norte-Nordeste. O Barradão te espera.</p>
            <button className="btn-primary">Seja Sócio LEÃO</button>
            </div>

            {/* Lado direito contendo APENAS o escudo isolado */}
            <div className="escudo-container">
            <img src="/Esporte_Clube_Vitória_(2024).svg.png" alt="Escudo Esporte Clube Vitória" />
            </div>
        </main>
        </div>
    );
    }