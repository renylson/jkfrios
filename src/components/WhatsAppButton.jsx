import React, { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar tooltip após 3 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 3000);

    return () => {
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <>
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de conhecer os produtos da Fábrica JK."
        target="_blank"
        rel="noopener noreferrer"
        className="animate-float animate-bounce-in"
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          background: 'var(--accent-color)',
          color: '#fff',
          borderRadius: '50%',
          width: 70,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          fontSize: 32,
          textDecoration: 'none',
          transition: 'var(--transition)',
          animation: 'pulse 2s infinite, fadeInUp 0.5s ease-out',
          animationDelay: '1s'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
        }}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.151"/>
        </svg>
      </a>

      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: 'fixed',
            right: 110,
            bottom: 45,
            background: 'var(--text-dark)',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '500',
            zIndex: 999,
            animation: 'fadeInRight 0.5s ease-out',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            maxWidth: '200px',
            textAlign: 'center'
          }}
        >
          💬 Precisa de ajuda? Fale conosco!
          <div
            style={{
              position: 'absolute',
              right: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '8px solid var(--text-dark)'
            }}
          />
        </div>
      )}

      <style>
        {`
          @keyframes pulse {
            0%, 100% { 
              box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
            }
            50% { 
              box-shadow: 0 8px 25px rgba(37, 211, 102, 0.7);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
}
