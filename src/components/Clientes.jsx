import React from 'react';
import ClientesCarrossel from './ClientesCarrossel';

export default function Clientes() {
  const depoimentos = [
    {
      nome: "Carlos Silva",
      empresa: "Restaurante Sabor Caseiro",
      texto: "Há 5 anos compramos da Fábrica JK e a qualidade é sempre excepcional. Nossos clientes elogiam constantemente o sabor das linguiças.",
      avaliacao: 5
    },
    {
      nome: "Maria Santos",
      empresa: "Açougue Central",
      texto: "Parceria de confiança! Os produtos sempre chegam frescos e dentro do prazo. A variedade de frios é excelente para nosso negócio.",
      avaliacao: 5
    },
    {
      nome: "João Pereira",
      empresa: "Churrascaria do Vale",
      texto: "As linguiças artesanais da JK fazem o diferencial no nosso rodízio. Qualidade incomparável e sabor autêntico.",
      avaliacao: 5
    }
  ];

  const parceiros = [ ];

  return (
    <section id="clientes" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1 rem' }}>
            Excelência em Cada Parceria
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '1000px', margin: '2rem auto', color: 'var(--text-light)', textAlign: 'justify', textAlignLast: 'left' }}>
            Nossos clientes e parceiros são parte essencial de uma jornada de qualidade e inovação. Por meio de relações sólidas e transparentes, garantimos produtos que atendem aos mais altos padrões do setor de frios e embutidos. A confiança estabelecida em cada colaboração fortalece nosso compromisso em entregar soluções consistentes e gerar resultados sustentáveis.
          </p>
        </div>

        {/* Depoimentos */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem' }}>
            Depoimentos
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {depoimentos.map((depoimento, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                position: 'relative'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  color: 'var(--primary-color)', 
                  opacity: 0.3,
                  position: 'absolute',
                  top: '10px',
                  left: '20px'
                }}>
                  "
                </div>
                <p style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '1.5rem',
                  paddingTop: '1rem',
                  color: 'var(--text-dark)',
                  lineHeight: '1.6'
                }}>
                  {depoimento.texto}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>
                      {depoimento.nome}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                      {depoimento.empresa}
                    </div>
                  </div>
                  <div style={{ color: 'var(--gold-color)' }}>
                    {'★'.repeat(depoimento.avaliacao)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel de Logomarcas dos Clientes */}
        <ClientesCarrossel />
      </div>
    </section>
  );
}
