import React from 'react';
import Contato from '../components/Contato';

export default function ContatoPage() {
  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '80px 0 80px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Fale Conosco
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Entre em Contato
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto' }}>
            Estamos prontos para atender você da melhor forma possível
          </p>
        </div>
      </section>

      <Contato />
    </div>
  );
}
