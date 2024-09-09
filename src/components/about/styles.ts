import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 20px;
  background-color: #fafafa; /* Cor de fundo mais suave */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const TextWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 20px;
  text-align: left;

  h2 {
    font-size: 34px;
    color: #333;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 18px;
    line-height: 1.7;
    color: #555;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none; /* Oculta a imagem em dispositivos menores */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; /* Bordas mais sutis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve */
  object-fit: cover;

  @media (max-width: 768px) {
    width: 80%; /* Ajusta o tamanho da imagem em dispositivos menores */
  }
`;
