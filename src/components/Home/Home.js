import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import styled from 'styled-components';
// import HomeScreenImage from '../../assets/images/home-screen5.svg';

const HomeScreen = styled.div `
  /* background-color: ${props => props.theme.darkThemeBG}; */
  margin:0;
  padding:0;
  width:100%;
  height:100vh;
  /* & img{
    position: relative;
    width:100%;
    height:100vh;
  } */
`;

export const Home = () => {
  return (
    <HomeScreen>
      {/* <img src={HomeScreenImage} alt="Home Screen"/> */}
      <Navbar/>
    </HomeScreen>
  )
}
