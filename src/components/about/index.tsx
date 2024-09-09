import React from 'react';
import { Section, Content, TextWrapper, Image, ImageWrapper } from './styles';
import psicologia from '../../assets/psicologia.jpg'

const About: React.FC = () => {
  return (
    <Section id="about">
      <Content>
        <TextWrapper>
          <h2>Sobre Nós</h2>
          <p>
            Somos uma equipe de psicólogos dedicados a promover a saúde mental e
            ajudar nossos pacientes a alcançar equilíbrio emocional e superar
            desafios psicológicos. Nosso objetivo é proporcionar um ambiente
            seguro e acolhedor para todos os nossos pacientes.
          </p>
        </TextWrapper>
        <ImageWrapper>
          <Image src={psicologia} alt="Sobre Nós" />
        </ImageWrapper>
      </Content>
    </Section>
  );
};

export default About;
