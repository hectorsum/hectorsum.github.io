import React from 'react'
import styled from 'styled-components';

const HomeScreen = styled.div `
  margin:0;
  padding:0;
  width:100%;
  height:100vh;
`;

const Title = styled.h1 `
  
  font-size: 55px;
  line-height:60px;
  color: ${props => props.theme.titleColor};
  font-family: 'Space Mono', monospace;
  margin:36px 0px 20px 0px;
  & span{
    color: ${props => props.theme.brandColor};
    font-family: 'Inconsolata', monospace;
    font-weight:800;
    font-size:72px;
    /* text-decoration:underline; */
  }
`;
const WrapperTitle = styled.div `
  position:absolute;
  height:auto;
  right:10%;
  top:25%;
  padding: 5rem;
  & p{
    font-size:18px;
    color: ${props => props.theme.paragraphColor};
    margin:0px;
  }
`;
export const Home = () => {
  return (
    <HomeScreen>
      <WrapperTitle>
        <Title>Hello. I'm <span>Hector Herrera</span>, a Web developer based in Lima</Title>
        <p>
        I'm a web developer who build projects from research to implementation. I combine empathy, business strategy and good design to create exceptional experiences.
        </p>
      </WrapperTitle>
    </HomeScreen>
  )
}
