import React from 'react';
import bgDesktop from 'assets/bg-desktop.svg';
import bgMobile from 'assets/bg-mobile.svg';
import { BackgroundDesktop, BackgroundMobile } from './styled';

export default function Background() {
  return (
    <>
      <BackgroundDesktop src={bgDesktop} alt="background" />
      <BackgroundMobile src={bgMobile} alt="background" />
    </>
  );
}
