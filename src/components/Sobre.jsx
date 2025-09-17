import React from 'react';
import fachada from '../assets/fachada.jpg';

export default function Sobre() {
  return (
    <section id="sobre" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
              Nossa História
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Fundada em 1993 pela família JK, nossa fábrica nasceu do sonho de produzir 
              linguiças artesanais com a qualidade e o sabor das receitas tradicionais. 
              Ao longo de mais de 30 anos, nos tornamos referência na região pela 
              excelência de nossos produtos.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Utilizamos apenas ingredientes selecionados, carnes nobres e temperos especiais, 
              seguindo rigorosos padrões de qualidade e higiene. Cada produto é cuidadosamente 
              preparado para garantir o melhor sabor e frescor.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Nossa Missão</h4>
                <p style={{ fontSize: '0.95rem' }}>Produzir alimentos de qualidade superior, preservando 
                o sabor tradicional e atendendo às necessidades de nossos clientes.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Nossos Valores</h4>
                <p style={{ fontSize: '0.95rem' }}>Tradição familiar, qualidade garantida, 
                frescor em cada produto e total satisfação do cliente.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div style={{
              background: 'var(--primary-color)',
              height: '400px',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Imagem de fundo */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${fachada})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>30+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Anos de Experiência</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>500+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Clientes Satisfeitos</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>50+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Produtos Diferentes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
