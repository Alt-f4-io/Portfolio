import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web world.
    </SectionText>
    <List>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experince with <br />
          React.js <br />
          Next.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experince with <br />
          Node.js <br />
          Firebase <br />
          MongoDB
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </List>
  </Section>
);

export default Technologies;
