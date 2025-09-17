import React from 'react';
import BackgroundSlideshow from './BackgroundSlideshow';

export default function Hero() {
  return (
    <section className="hero-section" style={{ 
      background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))', 
      color: '#fff', 
      padding: '140px 0 80px 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '30px 30px 0 0',
      margin: '80px 20px 40px 20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      {/* Slideshow de fundo apenas para o Hero */}
      <BackgroundSlideshow />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="animate-slide-in-up" style={{ 
          fontSize: 'clamp(1rem, 4vw, 2.5rem)', 
          fontWeight: '700', 
          marginBottom: '1.5rem',
          color: 'white',
          lineHeight: '1.2',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          JK & Frios – Qualidade e Confiança em Cada Produto
        </h1>
        <p className="animate-slide-in-up" style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', 
          marginBottom: '2rem',
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '1000px',
          margin: '0 auto 2rem',
          padding: '0 3rem',
          lineHeight: '1.6',
          textAlign: 'justify',
          textAlignLast: 'center',
          animationDelay: '0.2s'
        }}>
          Combinamos tradição, inovação e rigor no processo de produção para oferecer 
          frios e embutidos de alto padrão. Nossa missão é entregar sabor, segurança 
          e excelência que fortalecem a confiança de clientes e parceiros em todo o mercado.
        </p>
        <div className="animate-slide-in-up" style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          padding: '0 1rem',
          animationDelay: '0.4s'
        }}>
          <a href="#produtos" className="btn hover-lift animate-shimmer" style={{
            background: 'var(--gold-color)',
            color: 'var(--text-dark)',
            fontWeight: '600',
            fontSize: '1.1rem',
            padding: '15px 30px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            Nossos Produtos
          </a>
          <a href="#contato" className="btn hover-glow" style={{
            background: 'transparent',
            border: '2px solid white',
            color: 'white',
            fontSize: '1.1rem',
            padding: '13px 30px'
          }}>
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
