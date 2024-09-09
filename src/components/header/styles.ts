import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 20px 20px; /* Ajusta o padding em telas menores */
  }
`;

export const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #4A90E2;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px; /* Ajusta o espaçamento entre os itens de navegação em telas menores */
  }
`;

export const NavItem = styled.a`
  font-size: 18px;
  font-weight: 500;
  position: relative;
  padding: 5px 0;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #4A90E2;
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    height: 2px;
    background-color: #4A90E2;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
  }
`;
