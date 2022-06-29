import React from 'react';
import { HeaderContainer, Logo, StyledText } from './styled';
import sgcuLogo from '../../assets/sgcu-logo.svg';

export default function Header() {
  return (
    <HeaderContainer onClick={() => window.open('/', '_self')}>
      <Logo src={sgcuLogo} alt="sgcu-logo" />
      <StyledText>ISD SGCU</StyledText>
    </HeaderContainer>
  );
}
