import React from 'react'
import styled from 'styled-components';
import { Button } from '../Button/Button';

const MainContent = styled.div`
  background-color: ${props => props.theme.darkTheme};
  flex:1;
  padding: 10px;
  color: ${props => props.theme.dimGray};
`;

const Sidebar = styled.div`
  background-color: ${props => props.theme.darkTheme};
  color: ${props => props.theme.dimGray};
  flex: 0 auto;
  width: 200px;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Article = () => {
  return (
    <Wrapper>
      <MainContent>
        <p>Main Content</p>
        <p>
          <Button size="small">Click me!</Button>
          <Button>Click me!</Button>
          <Button size="large">Click me!</Button>
          <Button block>Click me!</Button>
          <Button block noBorder>Click me!</Button>
        </p>
      </MainContent>
      <Sidebar>
        Sidebar
      </Sidebar>
    </Wrapper>
  )
}
