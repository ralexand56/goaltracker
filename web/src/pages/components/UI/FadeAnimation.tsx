import React, { SFC } from 'react';
import styled, { keyframes } from '../../../styled-components';

const anim = keyframes`{
    0%{
        transform: rotate(0deg);
        opacity: 0;
        }
    100%{
        transform: rotate(0deg);
        opacity: 1;
        }
}`;

interface Props {
  className?: string;
  delay?: number;
}

const InnerWrapper = styled.section`
  animation: ${anim} 0.3s forwards ${(props: Props) => props.delay || 0}s ease;
  overflow: hidden;
  white-space: nowrap;
  h2 {
    margin: 0px 5px;
  }
  opacity: 0;
`;

const OuterWrapper = styled.section`
  overflow: hidden;
  white-space: nowrap;
`;

const FadeAnimation: SFC<Props> = ({ children, className, delay }) => (
  <OuterWrapper className={className}>
    <InnerWrapper delay={delay}>{children}</InnerWrapper>
  </OuterWrapper>
);

export default FadeAnimation;
