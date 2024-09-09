import React, { useEffect, useRef } from 'react';
import { Section, ServiceList, ServiceItem, Icon } from './styles';
import casal from '../../assets/casal.png';
import individual from '../../assets/individual.jpg';
import infantil from '../../assets/infantil.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registrar o plugin

const Services: React.FC = () => {
  const serviceItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    serviceItemsRef.current.forEach((item) => {
      gsap.fromTo(
        item,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item, 
            start: "top 70%", 
            toggleActions: "play none none reverse", 
          },
        }
      );
    });
  }, []);

  return (
    <Section id="services">
      <h2>Nossos Serviços</h2>
      <ServiceList>
        <ServiceItem ref={(el) => el && serviceItemsRef.current.push(el)}>
          <Icon src={individual} alt="Terapia Individual" />
          <h3>Terapia Individual</h3>
          <p>Atendimento focado nas suas necessidades pessoais.</p>
        </ServiceItem>
        <ServiceItem ref={(el) => el && serviceItemsRef.current.push(el)}>
          <Icon src={casal} alt="Terapia de Casal" />
          <h3>Terapia de Casal</h3>
          <p>Ajuda para melhorar a comunicação e resolver conflitos no relacionamento.</p>
        </ServiceItem>
        <ServiceItem ref={(el) => el && serviceItemsRef.current.push(el)}>
          <Icon src={infantil} alt="Psicoterapia Infantil" />
          <h3>Psicoterapia Infantil</h3>
          <p>Apoio especializado para crianças em desenvolvimento.</p>
        </ServiceItem>
      </ServiceList>
    </Section>
  );
};

export default Services;
