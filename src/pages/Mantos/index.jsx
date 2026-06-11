import './style.css';

export default function Mantos() {
  return (
    <div className="vitoria-theme">
      
      {/* O menu fantasma duplicado foi removido daqui para não quebrar a largura da tela */}

      <section className="mantos-section">
        <div className="section-title">
          <h5>Coleção Oficial</h5>
          <h2>NOSSAS CORES, <span>NOSSA PELE</span></h2>
        </div>

        <div className="mantos-grid">
          {/* Card 1 - Titular */}
          <div className="manto-card">
            <div className="manto-img-wrapper">
              <img src="/camisaVP1.jpg" className="manto-img" alt="Manto Home 2026" />
              <span className="manto-tag">Titular</span>
            </div>
            <div className="manto-info">
              <h3>Manto Rubro-Negro</h3>
              <p>As tradicionais faixas vermelho e preto carregadas de raça e paixão.</p>
              <div className="price">R$ 349,90</div>
            </div>
          </div>

          {/* Card 2 - Reserva */}
          <div className="manto-card">
            <div className="manto-img-wrapper">
              <img src="/camisaBranca.jpg" className="manto-img" alt="Manto Away 2026" />
              <span className="manto-tag">Reserva</span>
            </div>
            <div className="manto-info">
              <h3>Manto Branco</h3>
              <p>A elegância do branco com detalhes marcantes em vermelho e preto.</p>
              <div className="price">R$ 349,90</div>
            </div>
          </div>

          {/* Card 3 - Especial */}
          <div className="manto-card">
            <div className="manto-img-wrapper">
              <img src="/camisaPreta.jpg" className="manto-img" alt="Manto Consciência" />
              <span className="manto-tag Especial">Especial</span>
            </div>
            <div className="manto-info">
              <h3>Manto Preto</h3>
              <p>Edição especial celebrando o orgulho e as raízes da Bahia.</p>
              <div className="price">R$ 359,90</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}