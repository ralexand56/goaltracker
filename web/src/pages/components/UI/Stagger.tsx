import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const Sidebar = posed.nav({
  open: { x: '0%', staggerChildren: 100, delay: 600 },
  closed: { x: '-100%' }
});

const NavItem = posed.div({
  open: { opacity: 1 },
  closed: { opacity: 0 },
});

const NavStyle = styled(NavItem)`
  display: flex;
  opacity: 0;
`;

interface Props {
  isOpen: boolean;
  navItems: {}[];
}

export default ({ isOpen, navItems }: Props) => (
  <Sidebar pose={isOpen ? 'open' : 'closed'}>
    <ul>
      {navItems.map((x, i) => (
        <NavStyle key={i}>
          <a>{x}</a>
        </NavStyle>
      ))}
    </ul>
  </Sidebar>
);
