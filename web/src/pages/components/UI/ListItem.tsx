import React, { SFC } from 'react';
import styled from '../../../styled-components';
import FadeAnimation from './FadeAnimation';
import ThemeInterface from '../../../theme';

interface Props {
  isActive: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  index?: number;
  theme?: ThemeInterface;
}

const Wrapper = styled.article`
  display: flex;
  color: ${(props: Props) =>
    props.theme &&
    (props.isActive ? props.theme.backgroundColor : props.theme.primaryColor)};
  background: ${(props: Props) =>
    props.isActive
      ? props.theme && props.theme.activeBackgroundColor
      : props.theme!.backgroundColor};
  padding: 3px 10px;
  transition: all 0.7s ease;
  cursor: ${(props: Props) => (props.isActive ? 'unset' : 'pointer')};
`;

const LineItem: SFC<Props> = ({ children, index, isActive, onClick }) => (
  <FadeAnimation delay={index ? index * 0.02 : 0}>
    <Wrapper index={index} isActive={isActive} onClick={onClick}>
      {children}
    </Wrapper>
  </FadeAnimation>
);

export default LineItem;
