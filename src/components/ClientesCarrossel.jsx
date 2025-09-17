import React from 'react';
import cliente01 from '../assets/clientes/01.png';
import cliente02 from '../assets/clientes/02.jpg';
import cliente03 from '../assets/clientes/03.png';
import cliente04 from '../assets/clientes/04.jpg';
import cliente05 from '../assets/clientes/05.jpg';
import cliente06 from '../assets/clientes/06.jpg';
import cliente07 from '../assets/clientes/07.jpg';

const ClientesCarrossel = () => {
  const clientes = [
    { src: cliente01, alt: 'Cliente 1' },
    { src: cliente02, alt: 'Cliente 2' },
    { src: cliente03, alt: 'Cliente 3' },
    { src: cliente04, alt: 'Cliente 4' },
    { src: cliente05, alt: 'Cliente 5' },
    { src: cliente06, alt: 'Cliente 6' },
    { src: cliente07, alt: 'Cliente 7' }
  ];

  // Duplicar a lista para criar loop infinito
  const clientesDuplicados = [...clientes, ...clientes];

  return (
    <div style={{ 
      background: 'white', 
      borderRadius: '16px', 
      padding: '3rem',
      boxShadow: 'var(--shadow)',
      marginBottom: '1rem',
      overflow: 'hidden'
    }}>
      <h3 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem' }}>
        Nossos Clientes
      </h3>
      
      <div className="clientes-carrossel-container" style={{ padding: '2rem 0' }}>
        <div className="clientes-carrossel-track" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {clientesDuplicados.map((cliente, index) => (
            <div key={index} className="cliente-item" style={{
              width: '10rem',
              height: '10rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0'
            }}>
              <img 
                src={cliente.src} 
                alt={cliente.alt}
                style={{
                  width: '10rem',
                  height: '10rem',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientesCarrossel;
