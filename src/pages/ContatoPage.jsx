import React, { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '20px 0 20px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Fale Conosco
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Entre em Contato
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto' }}>
            Estamos prontos para atender você da melhor forma possível
          </p>
        </div>
      </section>

      {/* Conteúdo de contato */}
      <section id="contato" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Coluna Esquerda - Mapa / Localização */}
            <div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
                Nossa Localização
              </h3>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '0',
                paddingBottom: '70%',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                background: '#eee'
              }}>
                <iframe
                  title="Mapa - JK Frios"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d291.8578766402476!2d-40.53761215873142!3d-9.35825298008468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1758141211629!5m2!1spt-BR!2sbr"
                  style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%', border:0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                Avenida Gleycimara Alves Pereira, 421 - João de Deus - Petrolina-PE - CEP 56316-150
              </div>
              <div style={{ margin: '5% 20%', display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
                <a href="https://www.google.com/maps/dir//Avenida+Gleycimara+Alves+Pereira,+421,+Petrolina" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration:'none', padding:'0.6rem 1rem', fontSize:'0.85rem' }}>Ver Rotas</a>
                <a href="https://wa.me/5587988145817" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ textDecoration:'none', padding:'0.6rem 1rem', fontSize:'0.85rem' }}>WhatsApp</a>
                <a href="mailto:contato@jkfrios.com.br" className="btn" style={{ background:'var(--primary-color)', color:'#fff', textDecoration:'none', padding:'0.6rem 1rem', fontSize:'0.85rem' }}>E-mail</a>
              </div>
            </div>

            {/* Coluna Direita - Informações de Contato */}
            <div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '1.8rem' }}>
                Informações de Contato
              </h3>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'var(--bg-section)',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    background: '#212e3bff', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '10%',
                    fontSize: '1.2rem'
                  }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Endereço</div>
                    <div style={{ color: 'var(--text-dark)' }}>Avenida Gleycimara Alves Pereira, 421</div>
                    <div style={{ color: 'var(--text-dark)' }}>João de Deus - Petrolina-PE</div>
                    <div style={{ color: 'var(--text-dark)' }}>CEP: 56316-150</div>
                  </div>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'var(--bg-section)',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    background: '#212e3bff', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '10%',
                    fontSize: '1.2rem'
                  }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Telefones</div>
                    <div style={{ color: 'var(--text-dark)' }}>📱 (87) 98814-5817 (WhatsApp)</div>
                    </div>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'var(--bg-section)',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    background: '#212e3bff', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '10%',
                    fontSize: '1.2rem'
                  }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>E-mail</div>
                    <div style={{ color: 'var(--text-dark)' }}>📧 contato@jkfrios.com.br</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
