import React from 'react';
import styled from '../styled-components';
import { Link, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import AddItem from '../pages/additem';
import Icon from 'antd/lib/icon';

const MainContainer = styled.section`
  padding: 30px;
`;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  animation: tracking-in-contract-bck-top 0.7s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  text-transform: uppercase;
  font-weight: none;
  font-size: 1.5em;
  color: #a39544;
`;

const Index = () => (
  <MainContainer>
    <MainHeader>
      <Link to="/">Budget Crisis</Link>
      <Link to="/additem">
        <Icon type="plus" />
      </Link>
    </MainHeader>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/additem" component={AddItem} />
    </Switch>
  </MainContainer>
);

export default Index;
