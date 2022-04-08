import React from 'react';

import { Section, SectionText, SectionTitle, MainSection } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <MainSection row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Ovie Aloko <br/>
      </SectionTitle>
      <SectionText>
        I build websites tailored to your needs. I offer services such as, eCommerce websites, portfolios and websites for your buisness.
      </SectionText>
      <Button><a href='#about'>About Me</a></Button>
    </LeftSection>
  </MainSection>
);

export default Hero;