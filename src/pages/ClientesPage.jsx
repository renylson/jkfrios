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
    </div>
  );
}
