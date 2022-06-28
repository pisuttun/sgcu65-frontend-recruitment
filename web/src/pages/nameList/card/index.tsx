import React from 'react';
import { User } from '../type';
import { Container, StyledText } from './styled';

export default function Card(props: { user: User }) {
  return (
    <Container>
      <StyledText style={{ color: '#DE5C8E', fontWeight: 'bold', fontSize: '1.1rem' }}>
        {props.user.username}
      </StyledText>
      <StyledText>{props.user.name + ' ' + props.user.surname}</StyledText>
    </Container>
  );
}
