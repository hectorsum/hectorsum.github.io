import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
const Button = styled.button `
  padding: 15px;
  width:160px;
  color:black;
  background-color: ${props => props.theme.brandColor};
  border:none;
  font-size:16px;
  font-weight:600;
  margin-top:10px;
  font-family: 'Space Mono', monospace;
  outline:none;
  &:hover{
    border:none;
    cursor: pointer;
    font-size:16px;
    background-color:transparent;
    transition: all ease-out 0.5s;
    color: ${props => props.theme.titleColor};
    border: 2px solid ${props => props.theme.titleColor};
  }
`;

export const AboutButton = () => {
  const history = useHistory();
  const handleHistory = (e) =>{
    return history.push('/about');
  }
  return (
    <Button onClick={handleHistory}>Read more ➡️</Button>
  )
}
