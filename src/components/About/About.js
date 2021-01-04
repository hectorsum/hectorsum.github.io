import React from 'react'
import styled from 'styled-components';
import profile from '../../assets/images/profile.png';
import { DownloadResume } from '../Button/DownloadResume';

const AboutSection = styled.div `
  position:relative;
  background-color: ${props => props.theme.darkThemeBG};
  display:flex;
  justify-content:space-between;
  padding: 5rem;
  /* flex-wrap:wrap; */
`;
const Info = styled.div `
  display:flex;
  flex-direction:column;
  width:40%;
  & p{
    margin: 10px 0px;
    color: ${props => props.theme.paragraphColor};
  }
`
const ProfileImage = styled.img `
  width:500px;
  max-width: 100%;
  height:450px;
  object-fit:fill;
  object-position:50% 50%;
  border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  filter: grayscale(50%);
  &:hover{
    filter: brightness(90%);
  }
`;
const AboutTitle = styled.h1 `
  margin:0px 0px 10px;
  font-size:40px;
  color: ${props => props.theme.titleColor};
`;
const ImageWrapper = styled.div `
  width:60%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const About = () => {
  document.title = 'About | Hector Herrera'
  return (
    <AboutSection>
      <ImageWrapper>
        <ProfileImage src={profile} alt="Profile Image Hector Herrera"/>
      </ImageWrapper>
      <Info> 
        <AboutTitle>about me 👨‍💻</AboutTitle>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus atque similique recusandae dolorem fugiat ipsa saepe modi molestiae? Nisi maxime culpa fugit soluta quaerat cupiditate, quisquam explicabo facilis tempora quae earum, in eos placeat? Quod, recusandae officia! Iure, sit. Atque nisi repellendus velit ut! Dolorum cumque fuga dolor asperiores doloribus maxime quaerat error totam eius? Rerum ullam eius eveniet tenetur!</p>
        <DownloadResume/>
      </Info>
    </AboutSection>
  )
}