import React from 'react';
import { HeaderContainer } from './styled';
import Logo from '../../assets/sgcu-logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} style={{ marginRight: '2%' }} />
      <h4 style={{ color: '#DE5C8E' }}>ISD SGCU</h4>
    </HeaderContainer>
  );
}
