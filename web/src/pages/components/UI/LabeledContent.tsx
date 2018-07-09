import React, { SFC, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  label: ReactNode;
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8em;
`;

const LabelContainer = styled.section`
  display: flex;
  color: black;
  margin: 2px;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
  border-radius: 0px 10px 10px 0px;
  padding: 0px 5px;
  background: rgba(255, 255, 255, 0.6);
`;

const ContentContainer = styled.section`
  display: flex;
  margin: 2px;
`;

const LabeledContent: SFC<Props> = ({ children, label }) => (
  <Wrapper>
    <LabelContainer>{label}</LabelContainer>
    <ContentContainer>{children}</ContentContainer>
  </Wrapper>
);

export default LabeledContent;
