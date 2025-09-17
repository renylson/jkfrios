import React, { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Entre em Contato
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
            Estamos prontos para atender você! Entre em contato conosco para pedidos, orçamentos ou informações sobre nossos produtos.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Informações de Contato */}
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
                  background: 'var(--primary-color)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '50px', 
                  height: '50px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontSize: '1.2rem'
                }}>
                  📍
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Endereço</div>
                  <div style={{ color: 'var(--text-dark)' }}>Rua das Linguiças, 123</div>
                  <div style={{ color: 'var(--text-dark)' }}>Distrito Industrial - São Paulo, SP</div>
                  <div style={{ color: 'var(--text-dark)' }}>CEP: 01234-567</div>
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
                  background: 'var(--primary-color)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '50px', 
                  height: '50px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontSize: '1.2rem'
                }}>
                  📞
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Telefones</div>
                  <div style={{ color: 'var(--text-dark)' }}>📱 (11) 99999-9999 (WhatsApp)</div>
                  <div style={{ color: 'var(--text-dark)' }}>☎️ (11) 3333-4444 (Fixo)</div>
                  <div style={{ color: 'var(--text-dark)' }}>📠 (11) 3333-4445 (Fax)</div>
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
                  background: 'var(--primary-color)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '50px', 
                  height: '50px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontSize: '1.2rem'
                }}>
                  ✉️
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>E-mails</div>
                  <div style={{ color: 'var(--text-dark)' }}>📧 contato@fabricajk.com.br</div>
                  <div style={{ color: 'var(--text-dark)' }}>💼 vendas@fabricajk.com.br</div>
                  <div style={{ color: 'var(--text-dark)' }}>🛒 pedidos@fabricajk.com.br</div>
                </div>
              </div>
            </div>

            <div style={{ 
              background: 'var(--primary-color)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '12px' 
            }}>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Horário de Funcionamento</h4>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Segunda a Sexta:</span> <span>06:00 às 18:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sábado:</span> <span>06:00 às 14:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Domingo:</span> <span>Fechado</span>
                </div>
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
                * Atendimento comercial: Segunda a Sexta das 08:00 às 17:00
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '1.8rem' }}>
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} style={{ 
              background: 'var(--bg-section)', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: 'var(--shadow)'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  Empresa/Estabelecimento
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  Assunto *
                </label>
                <select
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Selecione o assunto</option>
                  <option value="orcamento">Solicitar Orçamento</option>
                  <option value="produtos">Informações sobre Produtos</option>
                  <option value="parceria">Proposta de Parceria</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  required
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva sua solicitação ou dúvida..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn"
                style={{
                  width: '100%',
                  background: 'var(--primary-color)',
                  color: 'white',
                  padding: '15px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
              >
                Enviar Mensagem
              </button>

              <div style={{ 
                fontSize: '0.9rem', 
                color: 'var(--text-light)', 
                marginTop: '1rem',
                textAlign: 'center'
              }}>
                * Campos obrigatórios. Responderemos em até 24 horas.
              </div>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>
            Nossa Localização
          </h3>
          <div style={{
            background: 'var(--bg-section)',
            height: '300px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-light)',
            fontSize: '1.2rem',
            border: '2px dashed var(--primary-color)'
          }}>
            [Mapa interativo do Google Maps aqui]<br/>
            <small>Rua das Linguiças, 123 - Distrito Industrial, São Paulo/SP</small>
          </div>
        </div>
      </div>
    </section>
  );
}
