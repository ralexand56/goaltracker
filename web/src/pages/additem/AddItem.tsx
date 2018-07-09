import React, { SFC } from 'react';
import styled from '../../styled-components';

const MainContainer = styled.section`
  font-size: 3em;
`;

const MainHeader = styled.header`
`;

const Add: SFC<{}> = () => (
  <MainContainer>
    <MainHeader>ADD</MainHeader>
  </MainContainer>
);

export default Add;
