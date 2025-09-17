import { useState, useEffect } from 'react';
import linguica01 from '../assets/linguica01.jpg';
import linguica02 from '../assets/linguica02.jpg';
import linguica03 from '../assets/linguica03.jpg';

// Lista de imagens de fundo locais
const images = [
  linguica01,
  linguica02,
  linguica03
];

const BackgroundSlideshow = ({ 
  interval = 5000,
  fadeDuration = 3000
}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = images[0];
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, isLoaded]);

  if (!isLoaded) return null;

  return (
    <div className="hero-slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
            transitionDuration: `${fadeDuration}ms`
          }}
          aria-hidden="true"
        />
      ))}
      <div className="hero-slideshow-overlay"></div>
    </div>
  );
};

export default BackgroundSlideshow;
