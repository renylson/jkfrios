import React from 'react';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import logoMedio from '../assets/logo_medio.png';

export default function HomePage() {
  return (
    <div className="page-transition" style={{ position: 'relative', overflow: 'hidden' }}>
      
      <Hero />
      <Sobre />
      
      {/* Seção de Destaques */}
      <section style={{ background: 'var(--bg-section)', position: 'relative', overflow: 'hidden' }}>
        <div className="decorative-element top-right"></div>
        <div className="container">
          <div className="animate-scale-in" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="badge animate-bounce-in">Qualidade Garantida</span>
            <h2 className="gradient-text gradient-animated animate-slide-in-up" style={{ animationDelay: '0.2s' }}>Por que escolher a JK & Frios?</h2>
            <p className="animate-slide-in-up" style={{ 
              fontSize: '1.1rem', 
              maxWidth: '1000px', 
              margin: '3rem auto',
              animationDelay: '0.4s',
              lineHeight: '1.6',
              textAlign: 'justify',
              textAlignLast: 'center'
            }}>
              Escolher a JK & Frios é optar por tradição, qualidade e confiança. Com mais de 9 anos de experiência, produzimos frios e produtos de carne com rigor técnico, dedicação e atenção a cada detalhe. Nossa empresa valoriza parcerias sólidas, atendimento próximo aos clientes e soluções que unem inovação e sabor. Cada produto reflete nosso compromisso com excelência e segurança alimentar, garantindo sempre o melhor para mesas e negócios da região.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de destaque da marca */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--bg-section), rgba(0, 31, 147, 0.02))', 
        padding: '100px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Partículas decorativas */}
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="container">
          <div className="animate-scale-in" style={{ marginBottom: '3rem' }}>
            <img 
              src={logoMedio} 
              alt="JK & Frios - Logo" 
              className="logo-glow animate-bounce-in heartbeat logo-quality"
              style={{ 
                height: 'clamp(100px, 15vw, 200px)',
                width: 'auto',
                margin: '0 auto',
                display: 'block',
                filter: 'drop-shadow(0 4px 20px rgba(0, 31, 147, 0.3))',
                animationDelay: '0.3s',
                imageRendering: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
          <h2 className="animate-slide-in-up" style={{ 
            color: 'var(--primary-color)', 
            marginBottom: '1.5rem',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            animationDelay: '0.5s'
          }}>
            Tradição que você pode confiar
          </h2>
          <p className="animate-slide-in-up" style={{ 
            fontSize: '1.2rem', 
            maxWidth: '1000px', 
            margin: '0 auto',
            color: 'var(--text-light)',
            animationDelay: '0.7s'
          }}>
            Há mais de 9 anos, a JK & Frios tem sido sinônimo de qualidade, 
            tradição e sabor autêntico na produção de frios e embutidos de alto padrão.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gradient-bg gradient-animated" style={{ textAlign: 'center', color: 'white' }}>
        <div className="container">
          <h2 className="animate-slide-in-up" style={{ 
            color: 'white', 
            marginBottom: '1rem',
            animationDelay: '0.2s'
          }}>
            Pronto para conhecer nossos produtos?
          </h2>
          <p className="animate-slide-in-up" style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            animationDelay: '0.4s'
          }}>
            Entre em contato conosco e descubra por que somos a escolha de dezenas de clientes
          </p>
          <div className="animate-slide-in-up" style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            animationDelay: '0.6s'
          }}>
            <a href="/produtos" className="btn btn-gold hover-lift animate-shimmer">Ver Produtos</a>
            <a href="/contato" className="btn btn-secondary hover-glow" style={{ borderColor: 'white', color: 'white' }}>
              Falar Conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
