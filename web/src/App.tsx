import Button from 'antd/lib/button';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

const MainContainer = styled.section`
  padding: 50px;
  h2 {
    font-size: 5em;
    text-shadow: 2px 2px white, 5px 5px rgba(0, 0, 0, 0.19);
    margin: 0;
    transform-origin: 20% 20%;
    filter: blur(0px);
    transform: matrix(1, 0, 0, 1, 0, 0);
    transition: all 0.5s ease;
  }
  .active {
    filter: blur(8px);
    transform: matrix(0.87, -0.5, 0.93, 0.62, 0, 0);
  }
`;

const ListPoseContainer = posed.ul({
  enter: { staggerChildren: 150 },
  exit: { staggerChildren: 150 }
});

const ListContainer = styled(ListPoseContainer)`
  padding-left: 0px;
  border: ${props => console.dir(props.children) || 'unset'};
  article {
    padding: 10px;
    color: #aaa;
    border-bottom: 0px solid rgba(255, 0, 0, 0.1);
  }
  article:nth-child(odd) {
    background-color: #ebf0f7;
  }
  border: 1px solid #ebf0f7;
  width: 500px;
`;

const ListItemContainer = posed.article({
  enter: { height: 50, opacity: 1 },
  exit: { height: 0, opacity: 0 }
});

const initialState = {
  items: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'],
  toggle: false
};

class App extends React.Component<{}, typeof initialState> {
  public state = initialState;

  public getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  };

  public toggleState = () =>
    this.setState(prevState => ({ toggle: !prevState.toggle }));

  public clearItems = () =>
    this.setState(prevState => ({
      toggle: !prevState.toggle,
      items: Array.apply(null, { length: this.getRandomInt(1, 8) }).map(
        (x: number, ind: number) => `Item ${ind}`
      )
    }));

  public render() {
    const { items } = this.state;

    return (
      <MainContainer>
        <Button type="primary" ghost={true} onClick={this.clearItems}>
          Toggle
        </Button>
        <h2 className={this.state.toggle ? 'active' : ''}> List Header</h2>
        <ListContainer>
          <PoseGroup>
            {items.map(x => (
              <ListItemContainer key={x}>{`${x}`}</ListItemContainer>
            ))}
          </PoseGroup>
        </ListContainer>
      </MainContainer>
    );
  }
}

export default App;
