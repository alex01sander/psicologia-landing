import React from 'react';
import banner01 from '../../assets/banner01.jpg';
import { Section, TextContent, Button,  } from './styles';

const MainSection: React.FC = () => {
 

  return (
    <Section backgroundImage={banner01}>
      <TextContent>
        <h1>Cuidando da sua saúde mental</h1>
        <p>Oferecemos apoio psicológico para ajudá-lo a alcançar o equilíbrio emocional e bem-estar.</p>
        <Button href="#contact">Marque uma consulta</Button>
      </TextContent>
      
    </Section>
  );
};

export default MainSection;
