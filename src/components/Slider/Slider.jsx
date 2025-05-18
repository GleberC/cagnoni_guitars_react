import React, { useState, useEffect } from 'react';
import imgConstrucaoDesktop from "../../assets/images/slider/resized_h600_construcao.jpg";
import imgConstrucaoMobile from "../../assets/images/slider/resized_h490_construcao.jpg";
import imgCustomDesktop from "../../assets/images/slider/resized_h600_custom.jpg";
import imgCustomMobile from "../../assets/images/slider/resized_h490_custom.jpg";
import imgManutencaoDesktop from "../../assets/images/slider/resized_h600_manutencao.jpg";
import imgManutencaoMobile from "../../assets/images/slider/resized_h490_manutencao.jpg";
import './Slider.css';

const slides = [
  {
    id: 1,
    desktop: imgConstrucaoDesktop,
    mobile: imgConstrucaoMobile,
    alt: 'img_construcao',
    title: 'Construção',
    link: '#construcao'
  },
  {
    id: 2,
    desktop: imgCustomDesktop,
    mobile: imgCustomMobile,
    alt: 'img_custom',
    title: 'Customização',
    link: '#custom'
  },
  {
    id: 3,
    desktop: imgManutencaoDesktop,
    mobile: imgManutencaoMobile,
    alt: 'img_manutencao',
    title: 'Manutenção',
    link: '#manutencao'
  }
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000); // troca a cada 5s

    return () => clearInterval(interval);
  }, []);

  const handleManualClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="slider">
      <div className="slider-content">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-box ${index === currentSlide ? 'active' : ''}`}
          >
            <a href={slide.link}>
              <img className="img-desktop" src={slide.desktop} alt={slide.alt} />
              <img className="img-mobile" src={slide.mobile} alt={slide.alt + '_mobile'} />
              <h2 className="sb_title">{slide.title}</h2>
            </a>
          </div>
        ))}
      </div>

      <div className="nav-manual">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`manual-btn ${index === currentSlide ? 'actived' : ''}`}
            onClick={() => handleManualClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Slider;
