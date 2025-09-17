import React from 'react';
import Contato from '../components/Contato';

export default function ContatoPage() {
  return (
    <div className="page-transition">
      {/* Header da página */}
      <section className="gradient-bg" style={{ padding: '120px 0 80px', textAlign: 'center', color: 'white' }}>
        <div className="container">
          <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Fale Conosco
          </span>
          <h1 style={{ color: 'white', marginBottom: '1rem' }}>
            Entre em Contato
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Estamos prontos para atender você da melhor forma possível
          </p>
        </div>
      </section>

      <Contato />

      {/* FAQ Section */}
      <section style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="gradient-text">Perguntas Frequentes</h2>
            <p style={{ fontSize: '1.2rem' }}>Tire suas dúvidas mais comuns sobre nossos produtos e serviços</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                pergunta: 'Qual é o prazo de validade dos produtos?',
                resposta: 'Nossos produtos têm validade de 15 a 30 dias refrigerados, dependendo do tipo. Sempre verifique a etiqueta do produto.'
              },
              {
                pergunta: 'Fazem entrega em toda a região?',
                resposta: 'Sim, atendemos toda a Grande São Paulo e interior. Para pedidos acima de R$ 200, a entrega é gratuita.'
              },
              {
                pergunta: 'Qual é o pedido mínimo?',
                resposta: 'O pedido mínimo é de R$ 100 para entregas. Para retirada na fábrica, não há valor mínimo.'
              },
              {
                pergunta: 'Posso visitar a fábrica?',
                resposta: 'Sim! Agende sua visita pelo telefone (11) 99999-9999. Funcionamos de segunda a sexta, das 8h às 17h.'
              }
            ].map((faq, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ 
                animationDelay: `${index * 0.1}s`,
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  {faq.pergunta}
                </h4>
                <p>{faq.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
