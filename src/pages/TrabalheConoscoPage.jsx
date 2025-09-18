import React, { useState } from 'react';

export default function TrabalheConoscoPage() {

  // Formulário de currículo
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    experiencia: '',
    curriculo: null,
    mensagem: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage('✅ Currículo enviado com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        cargo: '',
        experiencia: '',
        curriculo: null,
        mensagem: ''
      });
    }, 1500);
  };

  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '20px 0 20px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Carreiras
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Trabalhe Conosco
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto' }}>
            Faça parte da nossa equipe e construa uma carreira sólida conosco
          </p>
        </div>
      </section>

      {/* Vagas Disponíveis */}
      <section id="trabalhe" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
              Trabalhe Conosco
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '1000px', margin: '0 auto', color: 'var(--text-light)' }}>
              Faça parte da nossa equipe! Valorizamos profissionais comprometidos e oferecemos um ambiente de trabalho colaborativo e oportunidades de crescimento.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div id="formulario-curriculo" style={{ maxWidth: '600px', width: '100%' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '1.8rem', textAlign: 'center' }}>
                Envie seu Currículo
              </h3>
              <form onSubmit={handleSubmit} style={{ 
                background: 'white', 
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
                      fontSize: '1rem'
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
                    Cargo de Interesse *
                  </label>
                  <select
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Selecione o cargo</option>
                    <option value="operador-producao">Operador de Produção</option>
                    <option value="auxiliar-embalagem">Auxiliar de Embalagem</option>
                    <option value="vendedor-externo">Vendedor Externo</option>
                    <option value="outros">Outros cargos</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    Experiência Profissional
                  </label>
                  <textarea
                    name="experiencia"
                    rows="3"
                    value={formData.experiencia}
                    onChange={handleChange}
                    placeholder="Descreva sua experiência relevante..."
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
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    Currículo (PDF) *
                  </label>
                  <input
                    type="file"
                    name="curriculo"
                    accept=".pdf"
                    required
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                    Arquivo PDF com no máximo 5MB
                  </div>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    Mensagem Adicional
                  </label>
                  <textarea
                    name="mensagem"
                    rows="3"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-nos por que gostaria de trabalhar conosco..."
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
                <div style={{ 
                  background: 'var(--bg-section)',
                  padding: '1rem',
                  borderRadius: '6px',
                  marginBottom: '2rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-light)'
                }}>
                  <strong>Tratamento de Dados Pessoais (LGPD):</strong><br/>
                  Ao enviar seu currículo, você autoriza a Fábrica JK a utilizar seus dados pessoais 
                  exclusivamente para fins de recrutamento e seleção. Seus dados serão mantidos em 
                  segurança e poderão ser excluídos a qualquer momento mediante solicitação.
                </div>
                {statusMessage && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: statusMessage.includes('✅') ? '#d4edda' : '#f8d7da',
                    color: statusMessage.includes('✅') ? '#155724' : '#721c24',
                    border: `1px solid ${statusMessage.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
                    fontSize: '0.95rem',
                    textAlign: 'center',
                    marginBottom: '1rem'
                  }}>
                    {statusMessage}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn"
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    background: isLoading ? '#6c757d' : 'var(--primary-color)',
                    color: 'white',
                    padding: '15px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isLoading ? '⏳ Enviando...' : 'Enviar Currículo'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
