import React from 'react';

export default function Produtos() {
  const produtos = [
    { 
      categoria: 'Linguiças Artesanais',
      itens: [
        'Linguiça Toscana Premium',
        'Linguiça Calabresa Defumada', 
        'Linguiça de Frango com Ervas',
        'Linguiça de Pernil Temperada'
      ],
      desc: 'Linguiças artesanais produzidas com carnes selecionadas e temperos especiais da casa.',
      preco: 'A partir de R$ 25,90/kg'
    },
    { 
      categoria: 'Frios Selecionados',
      itens: [
        'Presunto Cozido Premium',
        'Mortadela Italiana com Pistache',
        'Salame Tipo Italiano',
        'Copa Lombo Defumada'
      ],
      desc: 'Frios nobres preparados com técnicas tradicionais e ingredientes de primeira qualidade.',
      preco: 'A partir de R$ 35,90/kg'
    },
    { 
      categoria: 'Embutidos Especiais',
      itens: [
        'Salsicha Alemã Premium',
        'Morcela Tradicional',
        'Chouriço Português',
        'Bacon Defumado Artesanal'
      ],
      desc: 'Embutidos especiais com receitas tradicionais e processo de defumação natural.',
      preco: 'A partir de R$ 29,90/kg'
    },
    { 
      categoria: 'Linha Gourmet',
      itens: [
        'Linguiça de Cordeiro com Alecrim',
        'Salame Trufado',
        'Presunto Parma Nacional',
        'Coppa di Parma'
      ],
      desc: 'Produtos gourmet para paladares exigentes, com ingredientes nobres e preparo especial.',
      preco: 'A partir de R$ 49,90/kg'
    }
  ];

  return (
    <section id="produtos" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Nossos Produtos
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
            Conheça nossa linha completa de linguiças artesanais, frios selecionados e embutidos especiais. 
            Todos os produtos são preparados com ingredientes de primeira qualidade e muito cuidado.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {produtos.map((produto, index) => (
            <div key={index} style={{
              background: 'var(--bg-light)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: 'var(--shadow)',
              border: '1px solid #e9ecef',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                background: 'var(--primary-color)',
                height: '200px',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                  {index === 0 ? '🌭' : index === 1 ? '🍖' : index === 2 ? '🥓' : '👑'}
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  [Imagem dos produtos da categoria]
                </div>
              </div>
              
              <h3 style={{ 
                color: 'var(--primary-color)', 
                marginBottom: '1rem',
                fontSize: '1.4rem'
              }}>
                {produto.categoria}
              </h3>
              
              <div style={{ marginBottom: '1rem' }}>
                {produto.itens.map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-dark)'
                  }}>
                    <span style={{ color: 'var(--gold-color)', marginRight: '0.5rem' }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
              
              <p style={{ 
                marginBottom: '1.5rem', 
                color: 'var(--text-light)',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>
                {produto.desc}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderTop: '1px solid #e9ecef',
                paddingTop: '1rem'
              }}>
                <span style={{ 
                  color: 'var(--primary-color)', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  {produto.preco}
                </span>
                <a href="#contato" className="btn" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          padding: '3rem', 
          background: 'var(--bg-section)', 
          borderRadius: '16px' 
        }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Produtos Sob Encomenda
          </h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            Também produzimos produtos personalizados para eventos, restaurantes e estabelecimentos. 
            Entre em contato para solicitar um orçamento especial.
          </p>
          <a href="#contato" className="btn" style={{ background: 'var(--gold-color)', color: 'var(--text-dark)' }}>
            Fazer Encomenda Especial
          </a>
        </div>
      </div>
    </section>
  );
}
