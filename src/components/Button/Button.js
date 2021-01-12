import styled from "styled-components";

export const Button = styled.a`
  width : ${props => props.workdetail ? 'auto' : '100px' };
  color:${props => props.theme.titleColor};;
  font-size:14px;
  font-weight:600;
  font-family: 'Space Mono', monospace;
  text-align:center;
  text-decoration:none;
  display:flex;
  align-items:center;
  & svg{
    margin-right:5px;
  }
  &:hover{
    border:none;
    cursor: pointer;
    text-decoration:underline;
    background-color:transparent;
    transition: all ease-out 0.2s;
    color: ${props => props.theme.brandColor};
  }
`;