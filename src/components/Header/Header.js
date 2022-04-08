import Link from 'next/link';
import React from 'react';
import { MdEmail  } from 'react-icons/md';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, Span, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems:"center", color:"white", marginBottom: "20px"}}>
          <DiCssdeck size="3em" />
          <span>Ovie</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      
      <li>
        <Link href='#service'>
          <NavLink>Services</NavLink>
        </Link>
      </li>
      <li>
      </li>
    </Div2>
  </Container>
);

export default Header;
