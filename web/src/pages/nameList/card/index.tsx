import React from 'react';
import { User } from '../type';
import { Container } from './styled';

export default function Card(props: { user: User }) {
  return (
    <Container>
      <p>{props.user.name}</p>
      <p>{props.user.surname}</p>
      <p>{props.user.username}</p>
    </Container>
  );
}
