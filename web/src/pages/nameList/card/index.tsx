import React from 'react';
import { User } from '../type';
import { Container, StyledText } from './styled';

export default function Card(props: { user: User }) {
  return (
    <Container>
      <StyledText style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{props.user.username}</StyledText>
      <StyledText style={{ color: 'black' }}>{props.user.name + ' ' + props.user.surname}</StyledText>
    </Container>
  );
}
