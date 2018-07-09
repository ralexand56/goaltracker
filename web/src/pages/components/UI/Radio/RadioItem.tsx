import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
  activeColor?: string;
  itemColor?: string;
  className?: string;
  handleDimensionChange: (id: number | string, left: number, width: number) => void;
  handleClick: (id: number | string) => void;
  name: string;
  id: number | string;
}

class RadioItem extends Component<Props, {}> {
  public ele: HTMLSpanElement | null = null;

  componentDidMount() {
    this.ele &&
      this.props.handleDimensionChange(
        this.props.id,
        this.ele.offsetLeft,
        this.ele.offsetWidth
      );
  }

  render() {
    const { className, name, id, handleClick } = this.props;

    return (
      <span
        ref={el => (this.ele = el)}
        key={id}
        className={className}
        onClick={() => handleClick(id)}
      >
        {name}
      </span>
    );
  }
}

export default styled(RadioItem)`
  color: ${props =>
    props.active ? props.activeColor || '#666' : props.itemColor || 'gray'};
  margin-right: 0.7em;
  cursor: pointer;
  letter-spacing: 0px;
  transition: all 0.5s;
  &:hover {
    color: ${props => props.activeColor || '#666'};
  }
`;
