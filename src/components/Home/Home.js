import React from 'react'
import styled from 'styled-components';

export const Home = () => {
  return (
    <HomeScreen>
      <WrapperTitle>
        <Title>Hello. I'm <span>Hector Herrera</span>, a Full Stack developer based in Lima</Title>
        <p>
        I'm a developer who build projects from research to implementation. I combine empathy, business strategy and good design to create exceptional experiences.
        </p>
      </WrapperTitle>
    </HomeScreen>
  )
}

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
  @media (max-width:768px){
    position:relative;
    right:0%;
    top:10%;
    padding: 5rem 1rem;
  }
  @media (max-width: 480px){
    position:relative;
    right:0%;
    top:10%;
    padding:0 16px;
    & h1{
      font-size:25px;
      line-height:40px;
    }
    & span{
      font-size:30px;
    }
    & p{
      font-size:18px;
    }
  }
  @media (max-width:320px){
    position:relative;
    right:-0%;
    top:0%;
    padding:0 16px;
  }
`;