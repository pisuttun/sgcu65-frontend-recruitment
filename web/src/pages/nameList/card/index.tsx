import React, { useEffect, useRef, useState } from 'react';
import { User } from '../type';
import { Container, StyledText, Tooltip } from './styled';

export default function Card(props: { user: User }) {
  const [overflow, setOverflow] = useState(false);
  const [overflow2, setOverflow2] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const ref2 = useRef<HTMLSpanElement | null>(null);

  const checkOverflow = (textContainer: HTMLSpanElement | null): boolean => {
    if (textContainer) return textContainer.offsetWidth < textContainer.scrollWidth;
    return false;
  };

  useEffect(() => {
    checkOverflow(ref.current) ? setOverflow(true) : setOverflow(false);
    checkOverflow(ref2.current) ? setOverflow2(true) : setOverflow2(false);
  }, [overflow, overflow2]);

  return (
    <Container>
      <StyledText ref={ref} style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
        {props.user.username}
        {overflow && <Tooltip>{props.user.username}</Tooltip>}
      </StyledText>

      <StyledText ref={ref2} style={{ color: 'black' }}>
        {props.user.name + ' ' + props.user.surname}
        {overflow2 && <Tooltip>{props.user.name + ' ' + props.user.surname}</Tooltip>}
      </StyledText>
    </Container>
  );
}
