import React from 'react';
import { Logo, Nav, NavItem, StyledHeader } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>Psicologia</Logo>
      <Nav>
        <NavItem href="#about">Sobre</NavItem>
        <NavItem href="#services">Serviços</NavItem>
        <NavItem href="#contact">Contato</NavItem>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
