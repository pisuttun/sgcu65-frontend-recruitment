import React from 'react';
import fbLogo from 'assets/fb-logo.svg';
import igLogo from 'assets/ig-logo.svg';
import twitterLogo from 'assets/twitter-logo.svg';
import { Container } from './styled';

export default function SocialBar() {
  return (
    <Container>
      <a href="https://www.instagram.com/sgcu.chula">
        <img src={igLogo} alt="ig-logo" />
      </a>
      <a href="https://www.facebook.com/sgcu.chula">
        <img src={fbLogo} alt="fb-logo" />
      </a>
      <a href="https://twitter.com/sgcu_chula">
        <img src={twitterLogo} alt="twitter-logo" />
      </a>
    </Container>
  );
}
