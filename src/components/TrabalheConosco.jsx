import React, { useState } from 'react';

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    experiencia: '',
    curriculo: null,
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert('Currículo enviado com sucesso! Analisaremos e entraremos em contato.');
  };

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

  const vagasDisponiveis = [
    {
      cargo: "Operador de Produção",
      tipo: "CLT - Integral",
      requisitos: ["Ensino médio completo", "Experiência em produção alimentícia (desejável)", "Disponibilidade para trabalhar em turnos"],
      salario: "R$ 1.800,00 + benefícios"
    },
    {
      cargo: "Auxiliar de Embalagem",
      tipo: "CLT - Integral", 
      requisitos: ["Ensino fundamental completo", "Experiência com embalagem", "Agilidade e atenção aos detalhes"],
      salario: "R$ 1.500,00 + benefícios"
    },
    {
      cargo: "Vendedor Externo",
      tipo: "CLT + Comissão",
      requisitos: ["Ensino médio completo", "Experiência em vendas B2B", "CNH categoria B", "Conhecimento da região"],
      salario: "R$ 2.200,00 + comissões + benefícios"
    }
  ];

  return (
    <section id="trabalhe" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Trabalhe Conosco
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
            Faça parte da nossa equipe! Valorizamos profissionais comprometidos e oferecemos um ambiente de trabalho colaborativo e oportunidades de crescimento.
          </p>
        </div>

        {/* Vagas Disponíveis */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '2rem' }}>
            Vagas Disponíveis
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {vagasDisponiveis.map((vaga, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                border: '1px solid #e9ecef'
              }}>
                <div style={{ 
                  background: 'var(--primary-color)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  display: 'inline-block',
                  fontSize: '0.9rem',
                  marginBottom: '1rem'
                }}>
                  {vaga.tipo}
                </div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.4rem' }}>
                  {vaga.cargo}
                </h4>
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: 'var(--text-dark)' }}>Requisitos:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                    {vaga.requisitos.map((req, idx) => (
                      <li key={idx} style={{ color: 'var(--text-light)', marginBottom: '0.3rem' }}>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #e9ecef',
                  paddingTop: '1rem'
                }}>
                  <span style={{ 
                    color: 'var(--primary-color)', 
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                    {vaga.salario}
                  </span>
                  <a href="#formulario-curriculo" className="btn" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
                    Candidatar-se
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Benefícios */}
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '1.8rem' }}>
              Nossos Benefícios
            </h3>
            
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: 'var(--shadow)'
            }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    💰
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Vale Alimentação</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>R$ 25,00/dia útil</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    🚌
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Vale Transporte</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>100% custeado pela empresa</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    🏥
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Plano de Saúde</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Coparticipação de 30%</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    🎯
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Participação nos Lucros</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>PLR anual conforme metas</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    📚
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Treinamentos</div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Capacitação profissional contínua</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ 
              background: 'var(--primary-color)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Por que trabalhar conosco?</h4>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Empresa familiar com mais de 30 anos no mercado</li>
                <li style={{ marginBottom: '0.5rem' }}>Ambiente de trabalho respeitoso e colaborativo</li>
                <li style={{ marginBottom: '0.5rem' }}>Oportunidades de crescimento profissional</li>
                <li style={{ marginBottom: '0.5rem' }}>Estabilidade e segurança no emprego</li>
                <li>Participação ativa no crescimento da empresa</li>
              </ul>
            </div>
          </div>

          {/* Formulário de Currículo */}
          <div id="formulario-curriculo">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '1.8rem' }}>
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
                Enviar Currículo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
