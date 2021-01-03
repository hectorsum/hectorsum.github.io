import React from 'react'
import styled from 'styled-components'
import LinkedinIcon from '../../assets/images/linkedin.png'
import GithubIcon from '../../assets/images/github.png'
import EmailIcon from '../../assets/images/email.png'
const FooterSection = styled.footer `
  display:relative;
  margin:0;
  padding: 2.5rem 5rem;
  background-color: ${props => props.theme.darkThemeBG};
  display:flex;
  justify-content:space-between;
`;

const EmailWrapper = styled.div `
  display:flex;
  align-items:center;
  justify-content:center;
  padding:5px;
  /* margin:15px; */
  text-decoration:none;
  & a{
    color: ${props => props.theme.brandColor};
    font-weight:700;
    font-size:16px;
  }
  & a:hover{
    transition: all ease 0.3s;
    color: ${props => props.theme.titleColor};
  }
`;

const SocialIconsWrapper = styled.div `
  display:flex;
  justify-content:center;
  align-items:center;
  & a{
    margin: 5px; 
  }
  & a:hover{
    transition: all ease 0.3s;
    transform: translateY(-8%);
  }
`;

const CopyrightSection = styled.div `
  padding:5px;
  & p{
    font-size:15px;
    color: ${props => props.theme.titleColor};
  }
`;

export const Footer = () => {
  return (
    <FooterSection>
      <EmailWrapper>
        <a href="mailto: sumhector@gmail.com">sumhector@gmail.com</a>
      </EmailWrapper>
      <SocialIconsWrapper>
        <a href="https://github.com/hectorsum" target="_blank">
          <img src={GithubIcon} width="26" alt="Github"/>
        </a>
        <a href="mailto: sumhector@gmail.com" alt="Email to Hector Herrera">
          <img src={EmailIcon} width="26" alt="Mail"/>
        </a>
        <a href="https://linkedin.com/in/hector-herrera-cusi" target="_blank">
          <img src={LinkedinIcon} width="26" alt=""/>
        </a>
      </SocialIconsWrapper>
      <CopyrightSection>
        <p>© 2021 by Hector Herrera &#9749;</p>
      </CopyrightSection>
    </FooterSection>
  )
}
