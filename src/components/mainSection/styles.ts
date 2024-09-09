import styled from 'styled-components';

interface SectionProps {
    backgroundImage: string;
}

export const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha o conteúdo à esquerda */
  justify-content: center;
  padding: 100px 20px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 600px;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    align-items: center; /* Centraliza o conteúdo em telas menores */
  }
`;

export const TextContent = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 10px;
  margin-left: 20px; /* Adiciona um espaço à esquerda se necessário */

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.a`
  padding: 10px 20px;
  background-color: #4A90E2;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ABD;
  }
`;
