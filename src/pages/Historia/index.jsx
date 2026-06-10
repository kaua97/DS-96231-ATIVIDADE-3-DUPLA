    import './style.css';

    export default function Historia() {
    return (
        <div className="vitoria-theme">

        <section className="history-section">
            <div className="section-title">
            <h5>Nossa Trajetória</h5>
            <h2>TRADIÇÃO REFORJADA EM <span>PRETO E VERMELHO</span></h2>
            </div>

            <div className="grid-history">
            <div className="history-card">
                <div className="year">1899</div>
                <h3>O Nascimento</h3>
                <p>Fundado como Club de Cricket Victoria, o Leão nasceu pioneiro na Barra, sendo um dos primeiros clubes formados apenas por brasileiros.</p>
            </div>

            <div className="history-card em-destaque">
                <div className="year">1986</div>
                <h3>O Templo: Barradão</h3>
                <p>Inauguração do Estádio Manoel Barradas, a fortaleza que mudou para sempre a história do clube e transformou o Vitória em um gigante temido.</p>
            </div>

            <div className="history-card">
                <div className="year">Fábrica de Talentos</div>
                <h3>Canteiro de Reis</h3>
                <p>Berço de lendas do futebol mundial como Bebeto, Vampeta, Dida e David Luiz. A base mais respeitada do país.</p>
            </div>
            </div>
        </section>
        </div>
    );
    }