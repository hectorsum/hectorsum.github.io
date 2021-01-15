import { useState } from "react";
import styled from "styled-components";
import {FaArrowCircleUp} from 'react-icons/fa';

export const BackToTopButton = () =>{
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
    <ArrowStyled onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  )
}

const ArrowStyled = styled(FaArrowCircleUp)`
  position: fixed; 
  left:95%;
  width: auto;
  bottom: 20px;
  align-items: center;
  height: 20px;
  justify-content: flex-end;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  color: ${ props => props.theme.brandColor};
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
  @media (max-width:768px){
    left:90%;
  }
  @media (max-width:480px){
    left:85%;
  }
  @media (max-width:320px){
    left:80%;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;