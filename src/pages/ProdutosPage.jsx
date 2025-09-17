import React from 'react';
import Produtos from '../components/Produtos';

export default function ProdutosPage() {
  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '120px 0 80px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Nossos Produtos
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Linha Completa de Embutidos
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Descubra nossa variedade de linguiças artesanais, frios selecionados e embutidos especiais
          </p>
        </div>
      </section>

      <Produtos />

      {/* Seção de Processo de Produção */}
      <section style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="gradient-text">Nosso Processo de Produção</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Conheça como produzimos nossos embutidos com qualidade e tradição
            </p>
          </div>
          
          <div className="grid grid-4">
            {[
              { step: '01', title: 'Seleção', desc: 'Carnes nobres e ingredientes de primeira qualidade' },
              { step: '02', title: 'Preparo', desc: 'Moagem e tempero seguindo receitas tradicionais' },
              { step: '03', title: 'Embutimento', desc: 'Processo artesanal em tripas naturais selecionadas' },
              { step: '04', title: 'Cura/Defumação', desc: 'Tempo adequado para desenvolver sabor único' }
            ].map((item, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ 
                animationDelay: `${index * 0.1}s`,
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
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
                <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
