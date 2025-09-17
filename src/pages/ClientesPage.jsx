import React from 'react';
import Clientes from '../components/Clientes';

export default function ClientesPage() {
  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '120px 0 80px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Nossos Clientes
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Clientes e Parceiros
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            A confiança de nossos clientes é nossa maior conquista
          </p>
        </div>
      </section>

      <Clientes />

      {/* Seção de Cases de Sucesso */}
      <section style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="gradient-text">Cases de Sucesso</h2>
            <p style={{ fontSize: '1.2rem' }}>Conheça histórias de sucesso de nossos parceiros</p>
          </div>

          <div className="grid grid-2">
            <div className="card animate-fade-in-left">
              <div style={{ 
                background: 'var(--primary-color)',
                color: 'white',
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ color: 'white' }}>Restaurante Sabor Caseiro</h4>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Parceiro há 5 anos</div>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>
                "Desde que começamos a usar os produtos da Fábrica JK, nosso movimento aumentou 40%. 
                Os clientes sempre elogiam o sabor diferenciado das linguiças."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  background: 'var(--bg-section)',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  👨‍🍳
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Carlos Silva</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Chef Proprietário</div>
                </div>
              </div>
            </div>

            <div className="card animate-fade-in-right">
              <div style={{ 
                background: 'var(--gold-color)',
                color: 'var(--text-dark)',
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <h4>Açougue Central</h4>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Parceiro há 3 anos</div>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>
                "A qualidade é sempre consistente e os prazos de entrega são rigorosamente cumpridos. 
                Nossos clientes confiam na marca JK."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  background: 'var(--bg-section)',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  👩‍💼
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Maria Santos</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Proprietária</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
