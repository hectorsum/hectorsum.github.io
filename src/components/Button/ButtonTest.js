import styled from 'styled-components';
export const ButtonTest = styled.button`
  background-color: ${props => props.theme.buttonColor};
  appearance: none;
  color: white;
  padding: 15px;
  outline: none;
  border: ${props => props.noBorder ? "0" : "2px solid white"};
  margin: 5px;
  &:hover{
    background-color: white;
    transition: all ease 0.5s;
    background-color: ${props => props.theme.darkTheme};
    cursor: pointer;
  }
  ${props => {
    switch(props.size){
      case "small":
        return "font-size: 12px;";
      case "large":
        return "font-size: 20px;";
      default:
        return "font-size: 16px";
    }
  }}
  ${props =>{
    if(props.block){
      return `
        display: block;
        width: 100%;
      `
    }
  }}
`;
