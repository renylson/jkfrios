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
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'justify' }}>
              Fundada em 2016, a JK & Frios nasceu em Petrolina – PE com o compromisso de oferecer ao 
              mercado frios e embutidos de qualidade, produzidos com rigor técnico e dedicação em cada 
              etapa do processo. Nossa atuação é pautada pela tradição, inovação e pelo cuidado em garantir 
              produtos que atendam aos mais altos padrões de segurança alimentar.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
              Localizada na Avenida Gleycimara Alves Pereira, 421 – João de Deus, a JK & Frios é referência 
              regional na fabricação de produtos de carne, sempre prezando pela confiança e satisfação de 
              clientes e parceiros.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
              Com uma trajetória sólida e em constante crescimento, seguimos firmes na missão de levar 
              sabor, excelência e credibilidade a cada mesa.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Nossa Missão</h4>
                <p style={{ fontSize: '0.95rem' }}>Produzir frios e embutidos com qualidade e 
                  segurança, levando sabor e confiança a clientes e parceiros.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Nossos Valores</h4>
                <p style={{ fontSize: '0.95rem' }}>Atuar com ética, tradição e inovação, 
                  garantindo relações de confiança e compromisso com a excelência.</p>
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
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '10rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>9+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Anos no mercado</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>10+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Toneladas de frios produzidos anualmente</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>50+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Clientes em toda a região</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
