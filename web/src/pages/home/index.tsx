import React, { SFC } from 'react';
import styled from '../../styled-components';

const MainContainer = styled.section`
  font-size: 3em;
`;

const MainHeader = styled.header`
`;

const Home: SFC<{}> = () => (
  <MainContainer>
    <MainHeader>HOME</MainHeader>
  </MainContainer>
);

export default Home;
