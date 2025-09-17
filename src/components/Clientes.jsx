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

  const parceiros = [
    "Supermercado Família",
    "Rede de Açougues Premium",
    "Restaurante Tradição",
    "Churrascaria Gaúcha",
    "Mercado Central",
    "Delicatessen Gourmet"
  ];

  return (
    <section id="clientes" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Nossos Clientes e Parceiros
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
            A confiança de nossos clientes é nossa maior conquista. Veja o que dizem sobre nossos produtos e serviços.
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

        {/* Principais Parceiros Comerciais */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '3rem',
          boxShadow: 'var(--shadow)'
        }}>
          <h3 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem' }}>
            Tipos de Estabelecimentos Atendidos
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            alignItems: 'center'
          }}>
            {parceiros.map((parceiro, index) => (
              <div key={index} style={{
                background: 'var(--bg-section)',
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                border: '2px dashed var(--primary-color)',
                color: 'var(--primary-color)',
                fontWeight: '500'
              }}>
                {parceiro}
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
            Certificações e Qualidade
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'var(--primary-color)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                ✓
              </div>
              <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>SIM/SIF</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Inspeção Federal</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'var(--primary-color)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                ✓
              </div>
              <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>HACCP</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Análise de Perigos</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                background: 'var(--primary-color)', 
                color: 'white', 
                borderRadius: '50%', 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                ✓
              </div>
              <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>ISO 9001</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Gestão da Qualidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
