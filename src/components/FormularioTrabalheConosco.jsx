import React, { useState } from 'react';

const FormularioTrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    experiencia: '',
    curriculo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Currículo enviado com sucesso! Entraremos em contato em breve.');
  };

  return (
    <section style={{ background: 'white', padding: '80px 0' }}>
      <div className="container">
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          background: 'var(--bg-section)',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Envie seu Currículo
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
              Faça parte da nossa equipe! Preencha o formulário abaixo e anexe seu currículo.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            {/* Nome Completo */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                Nome Completo *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            {/* Email e Telefone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600',
                  color: 'var(--text-dark)'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600',
                  color: 'var(--text-dark)'
                }}>
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>
            </div>

            {/* Cargo de Interesse */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                Cargo de Interesse
              </label>
              <select
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              >
                <option value="">Selecione uma área</option>
                <option value="producao">Produção</option>
                <option value="qualidade">Controle de Qualidade</option>
                <option value="vendas">Vendas</option>
                <option value="administrativo">Administrativo</option>
                <option value="manutencao">Manutenção</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Experiência */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                Conte um pouco sobre sua experiência
              </label>
              <textarea
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                rows="4"
                placeholder="Descreva sua experiência profissional relevante..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            {/* Upload de Currículo */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                Anexar Currículo * (PDF, DOC, DOCX)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="file"
                  name="curriculo"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px dashed var(--primary-color)',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(139, 69, 19, 0.05)'
                  }}
                />
                <div style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.9rem', 
                  color: 'var(--text-light)'
                }}>
                  Tamanho máximo: 5MB
                </div>
              </div>
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              📄 Enviar Currículo
            </button>
          </form>

          {/* Informações de contato */}
          <div style={{ 
            marginTop: '3rem', 
            textAlign: 'center',
            padding: '2rem',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #e9ecef'
          }}>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Outras formas de contato
            </h4>
            <p style={{ margin: '0.5rem 0', color: 'var(--text-dark)' }}>
              📧 curriculos@jkfrios.com.br
            </p>
            <p style={{ margin: '0.5rem 0', color: 'var(--text-dark)' }}>
              📱 WhatsApp: (11) 99999-9999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioTrabalheConosco;
