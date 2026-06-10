    import './style.css';

    export default function Mantos() {
    return (
        <div className="vitoria-theme">
        <nav>
            <div className="logo">EC VITÓRIA</div>
            <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">História</a>
            <a href="#" className="active">Mantos</a>
            </div>
        </nav>

        <section className="mantos-section">
            <div className="section-title">
            <h5>Coleção Oficial</h5>
            <h2>NOSSAS CORES, <span>NOSSA PELE</span></h2>
            </div>

            <div className="mantos-grid">
            {/* Card 1 */}
            <div className="manto-card">
                <div className="manto-img-wrapper">
                <div className="manto-placeholder rubro-negro"></div>
                <span className="manto-tag">Titular</span>
                </div>
                <div className="manto-info">
                <h3>Manto Home 2026</h3>
                <p>As tradicionais faixas horizontais carregadas de raça e paixão.</p>
                <div className="price">R$ 349,90</div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="manto-card">
                <div className="manto-img-wrapper">
                <div className="manto-placeholder branco-vitoria"></div>
                <span className="manto-tag">Reserva</span>
                </div>
                <div className="manto-info">
                <h3>Manto Away 2026</h3>
                <p>A elegância do branco com detalhes marcantes em vermelho e preto.</p>
                <div className="price">R$ 349,90</div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="manto-card">
                <div className="manto-img-wrapper">
                <div className="manto-placeholder dourado-vitoria"></div>
                <span className="manto-tag Especial">Especial</span>
                </div>
                <div className="manto-info">
                <h3>Manto Consciência</h3>
                <p>Edição especial dourada celebrando o orgulho e as raízes da Bahia.</p>
                <div className="price">R$ 359,90</div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    }