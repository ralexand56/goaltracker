import React, { SFC } from 'react';
import styled from 'styled-components';

interface Props {
  isVertical?: boolean;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: ${(props: Props) => (props.isVertical ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
`;

const Container: SFC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
