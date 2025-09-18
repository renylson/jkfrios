import React from 'react';
import cliente01 from '../assets/clientes/01.png';
import cliente02 from '../assets/clientes/02.jpg';
import cliente03 from '../assets/clientes/03.png';
import cliente04 from '../assets/clientes/04.jpg';
import cliente05 from '../assets/clientes/05.jpg';
import cliente06 from '../assets/clientes/06.jpg';
import cliente07 from '../assets/clientes/07.jpg';

export default function ClientesPage() {
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

  const clientes = [
    { src: cliente01, alt: 'Cliente 1' },
    { src: cliente02, alt: 'Cliente 2' },
    { src: cliente03, alt: 'Cliente 3' },
    { src: cliente04, alt: 'Cliente 4' },
    { src: cliente05, alt: 'Cliente 5' },
    { src: cliente06, alt: 'Cliente 6' },
    { src: cliente07, alt: 'Cliente 7' }
  ];
  const clientesDuplicados = [...clientes, ...clientes];

  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '50px 0 20px', textAlign: 'center', color: 'white' }}>
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

      {/* Seção principal de clientes e depoimentos */}
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
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '3rem',
            boxShadow: 'var(--shadow)',
            marginBottom: '1rem',
            overflow: 'hidden'
          }}>
            <h3 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem' }}>
              Nossos Clientes
            </h3>
            <div className="clientes-carrossel-container" style={{ padding: '2rem 0' }}>
              <div className="clientes-carrossel-track" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {clientesDuplicados.map((cliente, index) => (
                  <div key={index} className="cliente-item" style={{
                    width: '10rem',
                    height: '10rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0'
                  }}>
                    <img 
                      src={cliente.src} 
                      alt={cliente.alt}
                      style={{
                        width: '10rem',
                        height: '10rem',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
