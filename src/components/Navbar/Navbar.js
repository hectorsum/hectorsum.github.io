import React, { useState } from 'react'
import styled from 'styled-components';
import {IconContext} from "react-icons";
import { TiThMenu } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';

const MenuLink = styled.span`
  padding: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.titleColor};
  transition: all 0.3s ease-in;
  /* font-size: 0.9rem; */
  font-size: 16px;
  & span:hover {
    font-weight:bolder;
    transition: all ease 0.3s;
    color: ${props => props.theme.brandColor};
    /* text-shadow: 2px 2px 5px ${props => props.theme.navbarHoverFG}; */
  }
`;

const MenuMail = styled.a `
  padding: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.titleColor};
  transition: all 0.3s ease-in;
  /* font-size: 0.9rem; */
  font-size: 16px;
  & span:hover {
    font-weight:bolder;
    transition: all ease 0.3s;
    color: ${props => props.theme.brandColor};
    /* text-shadow: 2px 2px 5px ${props => props.theme.navbarHoverFG}; */
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.h1`
  padding: 1rem 0;
  color: #F5F5F5;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    /* flex-wrap: wrap; */
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    transition: max-height 0.5s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

// Home, About, Services, Portfolio, Contact
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Link to="/" style={{textDecoration:'none'}}>
        <Logo>
          Sum<span>code</span>
        </Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <IconContext.Provider value={{color:"#F5F5F5"}}>
          <TiThMenu/>
        </IconContext.Provider>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink>
          <NavLink exact to={"/"} style={{textDecoration:'none',color: "#F5F5F5"}} activeClassName="active">
            <span>home</span> 📍
          </NavLink>
        </MenuLink>
        {/* <MenuLink href="#services"> <span>services</span> 💻</MenuLink> */}

        <MenuLink > 
          <NavLink exact to={"/work"} style={{textDecoration:'none',color: "#F5F5F5"}}> 
            <span>work</span> 🚀
          </NavLink>
        </MenuLink>
        
        <MenuLink>
          <NavLink exact to={"/about"} style={{textDecoration:'none',color: "#F5F5F5"}} activeClassName="active"> 
            <span>about</span> 👨‍💻 
          </NavLink> 
        </MenuLink>
        <MenuMail href="mailto: sumhector@gmail.com"> <span>contact</span> 👋</MenuMail>
      </Menu>
    </Nav>
  )
}
