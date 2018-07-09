import React, { SFC } from 'react';
import styled from 'styled-components';
import Icon from 'antd/lib/icon';

interface Props {
  value?: string;
  placeholder?: string;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleOnClick?: () => void;
  handleEnterClick?: () => void;
  margin?: number;
  width?: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px ${(props: { margin?: number }) => props.margin || 7}px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0px 3px 3px 0px;
  border: none;
  color: black;
  cursor: pointer;
  height: 24px;
  padding: 0px 4px;
  transition: all 0.3s;
  &:hover {
    color: gray;
  }
  &:focus {
    outline: 0;
  }
`;

const StyledInput = styled.input`
  background: white;
  border: 0px solid gray;
  border-radius: 3px 0px 0px 3px;
  color: black;
  font-style: italic;
  font-size: 0.8em;
  padding: 0px 6px;
  width: ${(props: { width?: number }) => props.width || 150}px;
  height: 24px;
`;

const Input: SFC<Props> = ({
  handleChange,
  handleOnClick,
  handleEnterClick,
  placeholder,
  width,
  value,
}) => (
  <Wrapper>
    <StyledInput
      placeholder={placeholder}
      value={value}
      width={width}
      onChange={e => handleChange && handleChange(e)}
      onKeyPress={e => e.key === 'Enter' && handleEnterClick && handleEnterClick()}
    />
    <StyledButton onClick={e => handleOnClick && handleOnClick()}>
      <Icon type="close" />
    </StyledButton>
  </Wrapper>
);

export default Input;
