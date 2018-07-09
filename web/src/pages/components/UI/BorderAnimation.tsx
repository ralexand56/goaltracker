import React, { SFC } from 'react';
import styled, { keyframes } from '../../../styled-components';

const anim = keyframes`{
    0%{
        transform: rotate(0deg);
        width: 0%;
        height: 0%;
        }
    50%{
        transform: rotate(0deg);
        width: 100%;
        height: 0%;
        }
    100%{
        transform: rotate(0deg);
        width: 100%;
        height: 100%;
        }
}`;

interface Props {
  className?: string;
  delay?: number;
}

const InnerWrapper = styled.section`
  animation: ${anim} 0.5s forwards ${(props: Props) => props.delay || 0}s ease;
  display: flex;
  align-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  overflow: hidden;
  width: 0%;
  height: 0%;
  white-space: nowrap;
  h2, h4 {
    margin: 0px 5px;
  }
`;

const OuterWrapper = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
`;

const BorderAnimation: SFC<Props> = ({ children, className, delay }) => (
  <OuterWrapper className={className}>
    <InnerWrapper delay={delay}>{children}</InnerWrapper>
  </OuterWrapper>
);

export default BorderAnimation;
