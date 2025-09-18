
import React from 'react';
import linguica01 from '../assets/linguica01.jpg';
import linguica02 from '../assets/linguica02.jpg';
import linguica03 from '../assets/linguica03.jpg';
import logoMedio from '../assets/logo_medio.png';

export default function HomePage() {
  // BackgroundSlideshow
  const images = [linguica01, linguica02, linguica03];
  const interval = 5000;
  const fadeDuration = 3000;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new window.Image();
    img.onload = () => setIsLoaded(true);
    img.src = images[0];
  }, []);

  React.useEffect(() => {
    if (!isLoaded) return;
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(slideInterval);
  }, [interval, isLoaded]);

  // Sobre
  const sobreTitulo = "JK & Frios: Tradição, Qualidade e Confiança";
  const sobreTexto = "Somos uma empresa especializada na produção de frios e embutidos de alta qualidade, com mais de 9 anos de experiência no mercado. Nossa missão é oferecer produtos saborosos, seguros e inovadores, sempre prezando pela excelência e pelo atendimento próximo aos nossos clientes.";

  return (
    <div className="page-transition" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section */}
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
        {isLoaded && (
          <div className="hero-slideshow">
            {images.map((image, index) => (
              <div
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${image})`,
                  transitionDuration: `${fadeDuration}ms`
                }}
                aria-hidden="true"
              />
            ))}
            <div className="hero-slideshow-overlay"></div>
          </div>
        )}
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

      {/* Sobre Section */}
      <section className="sobre-section" style={{ background: 'var(--bg-section)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '2rem' }}>{sobreTitulo}</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-light)', lineHeight: '1.6', textAlign: 'justify', textAlignLast: 'center' }}>{sobreTexto}</p>
        </div>
      </section>

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
