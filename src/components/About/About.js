import React from 'react'
import styled from 'styled-components';
import profile from '../../assets/images/profile.png';
const AboutSection = styled.div `
  position:relative;
  /* background-color: ${props => props.theme.darkThemeBG}; */
  display:flex;
  padding: 5rem;
`;
const Info = styled.div `
  display:flex;
  flex-direction:column;
  & p{
    margin: 10px 0px;
    font-size:18px;
    color: ${props => props.theme.darkThemeFG};
  }
`
const ProfileImage = styled.img `
  width:350px;
  max-width: 100%;
  height:auto;
  /* border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; */
  border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  filter: brightness(60%);
  &:hover{
    transition:all ease 1s;
    filter: brightness(100%);
  }
`;
const AboutTitle = styled.h1 `
  margin:0px 0px 10px;
  font-size:40px;
  color: ${props => props.theme.darkThemeFG};
`;
export const About = () => {
  return (
    <AboutSection>
      <Info> 
        <AboutTitle>about me 👨‍💻</AboutTitle>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellat consequatur ipsum doloribus optio eveniet hic porro. Rerum repudiandae itaque dolore quasi amet non ex illo? Unde velit enim reiciendis!</p>
      </Info>
      <ProfileImage src={profile} alt="Profile Image Hector Herrera"/>
    </AboutSection>
  )
}
