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
            <div className="manto-card">
            <div className="manto-img-wrapper">
            <img src="/camisaVP1.jpg" className="public/camisaVP1.jpg" alt="Manto Home 2026" />
            <span className="manto-tag">Titular</span>
            </div>
            <div className="manto-info">
            <h3>Manto Rubro-Negro </h3>
            <p>As tradicionais faixas vermelho e preto carregadas de raça e paixão.</p>
            <div className="price">R$ 349,90</div>
            </div>
            </div>

            {/* Card 2 */}
            <div className="manto-card">
            <div className="manto-img-wrapper">
              {/* COLOQUE A SUA IMAGEM 2 AQUI DENTRO DA PASTA public COM O NOME: camisa-reserva.jpg */}
            <img src="/camisaBranca.jpg" className="public/camisaBranca.jpg" alt="Manto Away 2026" />
            <span className="manto-tag">Reserva</span>
            </div>
            <div className="manto-info">
            <h3>Manto Branco</h3>
            <p>A elegância do branco com detalhes marcantes em vermelho e preto.</p>
            <div className="price">R$ 349,90</div>
            </div>
            </div>

            {/* Card 3 */}
            <div className="manto-card">
            <div className="manto-img-wrapper">
              {/* COLOQUE A SUA IMAGEM 3 AQUI DENTRO DA PASTA public COM O NOME: camisa-especial.jpg */}
            <img src="/camisaPreta.jpg" className="public/camisaPreta.jpg" alt="Manto Consciência" />
            <span className="manto-tag Especial">Especial</span>
            </div>
            <div className="manto-info">
            <h3>Manto Preto</h3>
            <p>Edição especial o orgulho e as raízes da Bahia.</p>
            <div className="price">R$ 359,90</div>
            </div>
            </div>
        </div>
        </section>
        </div>
    );
    }