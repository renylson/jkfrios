import React from 'react';
import FormularioTrabalheConosco from '../components/FormularioTrabalheConosco';

export default function TrabalheConoscoPage() {
  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '120px 0 80px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Carreiras
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Trabalhe Conosco
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Faça parte da nossa equipe e construa uma carreira sólida conosco
          </p>
        </div>
      </section>

      {/* Formulário de Currículo */}
      <FormularioTrabalheConosco />
    </div>
  );
}
