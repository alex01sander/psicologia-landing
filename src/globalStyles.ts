import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3 {
    margin: 0 0 20px 0;
  }



  /* Personalização da barra de rolagem para WebKit (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
    background: #f5f5f5; /* Cor do trilho da barra de rolagem */
    border-radius: 8px; /* Bordas arredondadas no trilho */
  }

  ::-webkit-scrollbar-thumb {
    background: #4A90E2; /* Cor da "pegada" da barra de rolagem */
    border-radius: 8px; /* Bordas arredondadas na "pegada" */
    transition: background-color 0.3s ease; /* Transição suave para a cor */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #357ABD; /* Cor da "pegada" ao passar o mouse */
  }

  html {
    scroll-behavior: smooth;
  }

 

`;


