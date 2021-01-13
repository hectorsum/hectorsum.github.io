import React from 'react'
import styled from 'styled-components'
import { AboutButton } from '../Button/AboutButton'

const WannaKnowSection = styled.div `
  position:relative;
  background-color: ${props => props.theme.darkThemeBG};
  padding: 5rem;
  & p{
    color: ${props => props.theme.paragraphColor};
    font-size:18px;
    line-height:26px;
  }
  @media (max-width: 768px){
    padding: 5rem 1rem;
    & h1{
      font-size:35px;
    }
  }
`;

const WannaKnowTitle = styled.h1 `
  margin:0px 0px 10px;
  font-size:40px;
  color: ${props => props.theme.titleColor};
`;

export const WannaKnow = () => {
  return (
    <WannaKnowSection>
      <WannaKnowTitle>Who am I? 🎈</WannaKnowTitle>
      <p>I have a unique ability to translate big-picture vision into successful design solutions. I question assumptions, turn ambiguity into clarity, and radically empathize with users to craft valuable products and joyful experiences.
      </p>
      <AboutButton/>
    </WannaKnowSection>
  )
}
