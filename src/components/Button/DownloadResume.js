import React from 'react'
import styled from 'styled-components';

const Button = styled.button `
  padding: 15px;
  width:auto;
  color:black;
  background-color: ${props => props.theme.brandColor};
  border:none;
  font-size:16px;
  font-weight:600;
  margin-top:10px;
  font-family: 'Space Mono', monospace;
  outline:none;
  & a{
    text-decoration:none;
    color:black;
  }
  
  &:hover{
    border:none;
    cursor: pointer;
    font-size:16px;
    background-color:transparent;
    transition: all ease-out 0.5s;
    color: ${props => props.theme.titleColor};
    border: 2px solid ${props => props.theme.titleColor};
    & a{
      text-decoration:none;
      color:white;
    }
  }
`;


export const DownloadResume = () => {
  return (
    
      <a href="https://drive.google.com/file/d/1pcP43X2LYSaYfDVQC2U01B7LLw1SjqB4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Button>My Resume 📌</Button>
      </a>
  )
}
