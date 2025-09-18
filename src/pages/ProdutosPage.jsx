
import React from 'react';

export default function ProdutosPage() {

  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '20px 0 20px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Nossos Produtos
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Conheça os Nossos Produtos
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto' }}>
            Descubra nossa variedade de produtos de alta qualidade, feitos com tradição e os melhores ingredientes.
          </p>
        </div>
      </section>

      {/* Produtos em uso */}
      <section id="produtos" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
              Linha de Qualidade JK & Frios
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto', color: 'var(--text-light)' }}>
              Conheça nossa linha de produtos, todos elaborados com ingredientes selecionados e produzidos com 
              cuidado e dedicação. Garantimos sabor, frescor e excelência em cada etapa, oferecendo qualidade 
              que você pode confiar.
            </p>
          </div>
          {/* Lista de produtos removida. Adicione conteúdo estático ou personalizado aqui se desejar. */}
          <div style={{ textAlign: 'center' }}>
            <a href="#contato" className="btn" style={{ background: 'var(--gold-color)', color: 'var(--text-dark)' }}>
              Entre em contato conosco
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Processo de Produção */}
      <section style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="gradient-text">Nosso Processo de Produção</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto' }}>
              Conheça como produzimos nossos frios e embutidos com qualidade, cuidado e tradição.
            </p>
          </div>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { step: '01', title: 'Seleção', desc: 'Carnes nobres e ingredientes de primeira qualidade, escolhidos para garantir sabor e segurança.' },
              { step: '02', title: 'Preparo', desc: 'Moagem, tempero e combinação de ingredientes seguindo receitas tradicionais e padrões rigorosos.' },
              { step: '03', title: 'Produção', desc: 'Processo artesanal aplicado a frios e embutidos, garantindo textura, sabor e preservação ideais.' },
              { step: '04', title: 'Embalagem', desc: 'Produtos cuidadosamente embalados para manter frescor, higiene e qualidade até chegar ao consumidor.' }
            ].map((item, index) => (
              <div key={index} style={{ 
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                textAlign: 'center',
                position: 'relative',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary-color)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  {item.step}
                </div>
                <h4 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
