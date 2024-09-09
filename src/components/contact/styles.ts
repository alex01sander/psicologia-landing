import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 20px;
  background-color: #fff;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
  }
`;

export const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: #4A90E2;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  height: 150px;
  resize: none;

  &:focus {
    border-color: #4A90E2;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 15px;
  background-color: #4A90E2;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ABD;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #4A90E2;
  }
`;

export const SocialIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: 40px; /* Ajuste o espaçamento entre o formulário e os ícones */
  flex-wrap: wrap; /* Adapta o layout conforme necessário */
  justify-content: center; /* Centraliza os itens */
`;