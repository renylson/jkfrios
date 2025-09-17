import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--text-dark)', 
      color: '#fff', 
      padding: '3rem 0 2rem' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>
              JK & Frios - Tradição em Embutidos
            </h4>
            <p style={{ color: '#bdc3c7' }}>
              Fábrica de linguiças, frios e embutidos com tradição e qualidade.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>
              Contato
            </h4>
            <p style={{ color: '#bdc3c7' }}>📍 Endereço da Fábrica</p>
            <p style={{ color: '#bdc3c7' }}>📞 (11) 9999-9999</p>
            <p style={{ color: '#bdc3c7' }}>✉️ contato@fabrica.com</p>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>
              Horário de Funcionamento
            </h4>
            <p style={{ color: '#bdc3c7' }}>Segunda a Sexta: 8h às 18h</p>
            <p style={{ color: '#bdc3c7' }}>Sábado: 8h às 12h</p>
            <p style={{ color: '#bdc3c7' }}>Domingo: Fechado</p>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #34495e', 
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: '#bdc3c7', marginBottom: '1rem' }}>
            &copy; {new Date().getFullYear()} Nome da Fábrica. Todos os direitos reservados.
          </p>
          <p style={{ color: '#95a5a6', fontSize: '0.9rem' }}>
            <strong>Política de Privacidade:</strong> Este site segue as diretrizes da LGPD. 
            Seus dados são protegidos e utilizados apenas para fins de contato e relacionamento comercial. 
            Para dúvidas sobre privacidade, entre em contato conosco.
          </p>
        </div>
      </div>
    </footer>
  );
}
