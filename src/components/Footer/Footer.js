import React from 'react'
import styled from 'styled-components'
import LinkedinIcon from '../../assets/images/linkedin.png'
import GithubIcon from '../../assets/images/github.png'
import EmailIcon from '../../assets/images/email.png'

export const Footer = () => {
  return (
    <FooterSection className="row">
      <EmailWrapper className="col">
        <a href="mailto: sumhector@gmail.com">sumhector@gmail.com</a>
      </EmailWrapper>
      <SocialIconsWrapper className="col">
        <a href="https://github.com/hectorsum" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} width="26" alt="Github"/>
        </a>
        <a href="mailto: sumhector@gmail.com" alt="Email to Hector Herrera">
          <img src={EmailIcon} width="26" alt="Mail"/>
        </a>
        <a href="https://linkedin.com/in/hector-herrera-cusi" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} width="26" alt=""/>
        </a>
      </SocialIconsWrapper>
      <CopyrightSection className="col">
        <p className="m-0">© 2021 by Hector Herrera &#9749;</p>
      </CopyrightSection>
    </FooterSection>
  )
}

const FooterSection = styled.footer `
  position:relative;
  margin:0;
  padding: 2.5rem 5rem;
  background-color: ${props => props.theme.darkThemeBG};
  display:flex;
  justify-content:space-between;
  @media (max-width:768px){
    padding: 5rem 1rem;
  }
`;

const EmailWrapper = styled.div `
  display:flex;
  align-items:center;
  justify-content:flex-start;
  padding-right:12px;
  width:auto;
  /* margin:15px; */
  text-decoration:none;
  & a{
    color: ${props => props.theme.brandColor};
    font-weight:700;
    font-size:16px;
    width:auto;
  }
  & a:hover{
    transition: all ease 0.3s;
    color: ${props => props.theme.titleColor};
  }
  @media (max-width:768px){
    display:flex;
    padding:12px;
    justify-content:center;
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
  padding:0px;
  display:flex;
  justify-content: flex-end;
  align-items:center;
  padding-left:12px;
  & p{
    width:auto;
    font-size:15px;
    color: ${props => props.theme.titleColor};
  }
  @media (max-width:768px){
    display:flex;
    justify-content:center;
    padding:12px;
    & p{
      text-align:center;
    }
  }
`;