import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './ServicesStyles';

const Services = () => (
  
  <Section id="service">
    <SectionDivider/>
    <SectionTitle>Services</SectionTitle>
    <Boxes>
      <Box>
        <BoxTitle>Ecomerce Website</BoxTitle>
        <BoxText>I can offer you an ecomerce website that promotes you and your merchandise</BoxText>
      </Box>
      <Box>
        <BoxTitle>Buisness Website</BoxTitle>
        <BoxText>I can offer you a Buisness website that promotes you and your company.</BoxText>
      </Box>
      <Box>
        <BoxTitle>Portfolio</BoxTitle>
        <BoxText>I can offer you a portfolio that expresses you for who you are.Show casing all your projects</BoxText>
      </Box>
    </Boxes>
    <SectionSubText>More info on pricing can be found if you contact me at stephenaloko7@gmail.com</SectionSubText>
  </Section>
);

export default Services;
