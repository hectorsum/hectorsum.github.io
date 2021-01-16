import React from 'react'
import styled from 'styled-components';
import profile from '../../assets/images/profile.png';
import { DownloadResume } from '../Button/DownloadResume';

export const About = () => {
  document.title = 'About | Hector Herrera'
  return (
    <AboutSection className="row m-0 mb-5 d-flex justify-content-center align-items-start w-auto">
      <ProfileImage className="col-md-5 mb-3 mt-3" src={profile} alt="Profile Image Hector Herrera"/>
      <Info className="col w-auto"> 
        <AboutTitle>about me 👨‍💻</AboutTitle>
        <p>Hey! I'm Hector Herrera, a final year student of Computer Systems engineering and Full Stack web developer. I'm also working at <span>FullTimeForce</span> as a Junior Developer.</p>
        <p>I have fun creating all of my projects either front-end or back-end stuff. On the other hand, I highly enjoy when people use what I built, and feel curious about what they think or do with them.</p>
        <p>I'm really patient and focused when news projects come, so that I bring the best experience and care deeply about details so that my work impacts others in the best possible way.</p>
        <p>I enjoy having challenges and teaching others about web development or general stuff, it's part of me and always will be. In my spare time I like to read books or play with my cats.</p>
        <DownloadResume/>
      </Info>
    </AboutSection>
  )
}

const AboutSection = styled.div `
  background-color: ${props => props.theme.darkThemeBG};
  position:relative;
  padding: 5rem;
  @media (max-width: 800px){
    padding: 5rem 0;
  }
`;
const Info = styled.div `
  display:flex;
  flex-direction:column;
  width:auto;
  & p{
    margin: 10px 0px;
    line-height:30px;
    color: ${props => props.theme.paragraphColor};
  }
  & span{
    color: ${props => props.theme.brandColor};
    font-weight:500;
  }
`
const ProfileImage = styled.img `
  width:500px;
  height:700px;
  max-width: 50%;
  max-height:50%;
  vertical-align:middle;
  object-fit:fill;
  object-position:50% 50%;
  border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  filter: grayscale(50%);
  &:hover{
    filter: brightness(90%);
  }
  @media (max-width:800px){
    width: auto;
    height: auto;
    max-width: 100%;
    max-height:100%;
  }
`;
const AboutTitle = styled.h1 `
  margin:0px 0px 10px;
  font-size:40px;
  color: ${props => props.theme.titleColor};
`;