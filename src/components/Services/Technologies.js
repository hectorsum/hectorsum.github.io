import React from 'react'
import styled from 'styled-components'
import nodejs from '../../assets/images/node-js.svg';
import react from '../../assets/images/react.svg';
import express from '../../assets/images/express.svg';
import javascript from '../../assets/images/javascript.svg';
import sass from '../../assets/images/sass.svg';
import webpack from '../../assets/images/webpack.svg';
import npm from '../../assets/images/npm.svg';
import python from '../../assets/images/python.svg';
import mysql from '../../assets/images/mysql.svg';
import sqlite from '../../assets/images/sqlite.svg';
import bootstrap from '../../assets/images/bootstrap.svg';

const TechnologiesSection = styled.div `
  display:relative;
  background-color:#191919;
  padding: 2.5rem 5rem;
`;

const TecnologiesSectionTitle = styled.h1 `
  margin:0;
  font-size: 32px;
  color: ${props => props.theme.titleColor};
  text-align:center;
`;

const TechnologiesWrapper = styled.div `
  display:grid;
  grid-template-columns: 25% 25% 25% 25%;
  column-gap: 10px;
  row-gap: 10px;
  margin-top:10px;
`;

const Image = styled.img `
  width:150px;
  place-self: center;
`;

const DescriptionWrapper = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  & p{
    text-align:center;
    color: ${props => props.theme.paragraphColor};
    font-size:18px;
  }
`;

export const Technologies = () => {
  return (
    <TechnologiesSection>
      <DescriptionWrapper>
        <TecnologiesSectionTitle>Technologies and Frameworks</TecnologiesSectionTitle>
        <p>Some languages, libraries and frameworks I use most in my projects</p>
      </DescriptionWrapper>
      <TechnologiesWrapper>
        <Image src={nodejs} alt={nodejs}/>
        <Image src={react} alt={react}/>
        <Image src={express} alt={express}/>
        <Image src={javascript} alt={javascript}/>
        <Image src={sass} alt={sass}/>
        <Image src={webpack} alt={webpack}/>
        <Image src={npm} alt={npm}/>
        <Image src={python} alt={python}/>
        <Image src={mysql} alt={mysql}/>
        <Image src={sqlite} alt={sqlite}/>
        <Image src={bootstrap} alt={bootstrap}/>
      </TechnologiesWrapper>
    </TechnologiesSection>
  )
}
