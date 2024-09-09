import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 40px;
    color: #333;
  }
`;

export const ServiceList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ServiceItem = styled.div`
  flex: 1;
  max-width: 600px; 
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h3 {
    font-size: 24px;
    color: #4A90E2;
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #666;
    margin: 0;
    max-width: 300px;
  }
`;




export const Icon = styled.img`
  width: 200px; /* Ajuste o tamanho da imagem conforme necessário */
  height: auto;
  margin-bottom: 15px;
  border-radius: 50%; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra leve */
`;
