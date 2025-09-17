import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const FormularioTrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    experiencia: '',
    curriculo: null
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      // Preparar dados para EmailJS
      const templateParams = {
        to_name: 'Equipe JK & Frios',
        from_name: formData.nome,
        from_email: formData.email,
        telefone: formData.telefone,
        cargo: formData.cargo || 'Não especificado',
        message: formData.experiencia || 'Nenhuma mensagem adicional',
        reply_to: formData.email
      };

      // Configurar suas chaves EmailJS aqui
      const SERVICE_ID = 'your_service_id'; // Configure no EmailJS
      const TEMPLATE_ID = 'your_template_id'; // Configure no EmailJS  
      const PUBLIC_KEY = 'your_public_key'; // Configure no EmailJS

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatusMessage('✅ Currículo enviado com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        cargo: '',
        experiencia: '',
        curriculo: null
      });

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatusMessage('❌ Erro ao enviar. Tente novamente ou use nosso WhatsApp.');
    } finally {
      setIsLoading(false);
    }
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
                <option value="vendas">Vendas</option>
                <option value="administrativo">Administrativo</option>
                <option value="manutencao">Manutenção</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                Deixe sua mensagem
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

            {/* Status Message */}
            {statusMessage && (
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: statusMessage.includes('✅') ? '#d4edda' : '#f8d7da',
                color: statusMessage.includes('✅') ? '#155724' : '#721c24',
                border: `1px solid ${statusMessage.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
                fontSize: '0.95rem',
                textAlign: 'center'
              }}>
                {statusMessage}
              </div>
            )}

            {/* Botão de Envio */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                background: isLoading 
                  ? '#6c757d' 
                  : 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '1rem',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {isLoading ? '⏳ Enviando...' : '📄 Enviar Currículo'}
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
