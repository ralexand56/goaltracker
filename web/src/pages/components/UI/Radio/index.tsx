import React, { Component } from 'react';
import styled from 'styled-components';
import RadioItem from './RadioItem';

interface Props {
  activeColor?: string;
  backgroundColor?: string;
  className?: string;
  fontSize?: string;
  value: number | string;
  label?: string;
  labelColor?: string;
  labelBold?: boolean;
  margin?: number;
  items: NameId[];
  itemColor?: string;
  onChange?: (id: number | string) => void | undefined;
  padding?: string;
  width?: number;
  underlineColor?: string;
}

const initialState = {
  value: 1,
  items: []
};

interface Item {
  id: number | string;
  left: number;
  width: number;
}

interface State {
  value: number | string;
  items: Item[];
}

export interface NameId {
  id: number | string;
  name: string;
}

const BodyContainer = styled.div`
  display: flex;
  border: 0px solid black;
  padding: 7px;
  position: relative;
`;

type LabelProps = {
  labelColor?: string;
  labelBold?: boolean;
};

const Label = styled.span`
  border-right: 1px solid;
  color: ${(props: LabelProps) => props.labelColor || 'black'};
  font-weight: ${(props: LabelProps) => (props.labelBold ? 'bold' : 'none')};
  margin: 0em;
  padding-right: 0.3em;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const UnderLine = styled.div`
  left: ${(props: {
    activeLeft: number;
    activeWidth: number;
    underlineColor: string;
  }) => props.activeLeft}px;
  height: 1px;
  width: ${(props: {
    activeLeft: number;
    activeWidth: number;
    underlineColor: string;
  }) => props.activeWidth}px;
  background: ${(props: {
    activeLeft: number;
    activeWidth: number;
    underlineColor: string;
  }) => props.underlineColor || 'black'};
  position: absolute;
  bottom: 5px;
  transition: all 0.5s;
`;

class Radio extends Component<Props, State> {
  readonly state: State = initialState;

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.value === prevState.value) {
      return null;
    }

    return {
      value: nextProps.value
    };
  }

  handleDimensionChanged = (id: number | string, left: number, width: number) =>
    this.setState((prevState: State) => ({
      items: [...prevState.items, { id, left, width }]
    }));

  handleItemClicked = (value: number | string) =>
    this.setState((prevState: State) => ({ value }));

  render() {
    const {
      activeColor,
      className,
      items,
      label,
      labelBold,
      labelColor,
      onChange,
      underlineColor
    } = this.props;

    const { value, items: stateItems } = this.state;

    if (!this.props.items) {
      return null;
    }

    const showItems: boolean = items && items.length > 0;
    const itemElements = showItems
      ? this.renderItems(
          items,
          value,
          onChange || this.handleItemClicked,
          activeColor
        )
      : [];

    const activeItem = stateItems.find(x => x.id === value);
    const left = activeItem ? activeItem.left : 0;
    const width = activeItem ? activeItem.width : 0;

    return (
      <div className={className}>
        <Label
          labelBold={labelBold}
          labelColor={labelColor ? labelColor : 'black'}
        >
          {label}
        </Label>
        {showItems && (
          <BodyContainer>
            {itemElements}

            <UnderLine
              activeLeft={left}
              activeWidth={width}
              underlineColor={underlineColor || 'black'}
            />
          </BodyContainer>
        )}
      </div>
    );
  }

  renderItems = (
    items: NameId[],
    value: number | string,
    onChange: (id: number | string) => void,
    activeColor?: string
  ) =>
    items.map(x => (
      <RadioItem
        active={x.id === value}
        key={x.id}
        name={x.name}
        id={x.id}
        handleDimensionChange={this.handleDimensionChanged}
        activeColor={activeColor}
        handleClick={onChange}
      />
    ));
}

export default styled(Radio)`
  background: ${props => props.backgroundColor || 'unset'};
  display: flex;
  font-size: ${props => props.fontSize || '1em'};
  justify-content: flex-start;
  align-items: center;
  border-radius: 0px;
  margin: ${props => props.margin || '0'}px;
  width: ${props => props.width || 'auto'};
  padding: ${props => props.padding || '0px'};
`;
