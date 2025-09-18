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
            Linha de Qualidade JK & Frios
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto', color: 'var(--text-light)' }}>
            Conheça nossa linha de produtos, todos elaborados com ingredientes selecionados e produzidos com 
            cuidado e dedicação. Garantimos sabor, frescor e excelência em cada etapa, oferecendo qualidade 
            que você pode confiar.
          </p>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem', 
          background: 'var(--bg-section)', 
          borderRadius: '16px' 
        }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Aqui será a lista de produtos (em desenvolvimento).
          </h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            Aqui vamos colocar uma lista detalhada dos produtos oferecidos pela JK & Frios, incluindo descrições,
            ingredientes e preços. Fique atento para novidades!
          </p>
          <a href="#contato" className="btn" style={{ background: 'var(--gold-color)', color: 'var(--text-dark)' }}>
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
}
