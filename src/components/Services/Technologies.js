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
import firebase from '../../assets/images/firebase.svg';

export const Technologies = () => {
  return (
    <TechnologiesSection>
      <DescriptionWrapper className="p-3">
        <TecnologiesSectionTitle >Technologies and Frameworks</TecnologiesSectionTitle>
        <p>Some languages, libraries and frameworks I use most in my projects</p>
      </DescriptionWrapper>
      <div className="col-md-12">
        <TechnologiesWrapper className="row d-flex justify-content-center p-0 m-0 pb-3">
          <div className="row col-md-12 d-flex justify-content-around">
              <Image src={nodejs} alt={nodejs} className="col-md-4 m-3"/>
              <Image src={express} alt={express} className="col-md-4 m-3"/>
              <Image src={javascript} alt={javascript} className="col-md-4 m-3"/>
          </div>
          <div className="row col-md-12 d-flex justify-content-around">
              <Image src={sass} alt={sass} className="col-md-4 m-3"/>
              <Image src={webpack} alt={webpack} className="col-md-4 m-3"/>
              <Image src={react} alt={react} className="col-md-4 m-3"/>
          </div>
          <div className="row col-md-12 d-flex justify-content-around">
              <Image src={mysql} alt={mysql} className="col-md-4 m-3"/>
              <Image src={sqlite} alt={sqlite} className="col-md-4 m-3 "/>
              <Image src={firebase} alt={firebase} className="col-md-4 m-3"/>
          </div>
          <div className="row col-md-12 d-flex justify-content-around">
              <Image src={python} alt={python} className="col-md-4 m-3"/>
              <Image src={npm} alt={npm} className="col-md-4 m-3"/>
              <Image src={bootstrap} alt={bootstrap} className="col-md-4 m-3"/>
          </div>
        </TechnologiesWrapper>
      </div>
    </TechnologiesSection>
  )
}

const TechnologiesSection = styled.div `
  display:relative;
  background-color:#191919;
  /* padding: 2.5rem 5rem; */
  @media (max-width:800px){
    padding: 5rem 0;
  }
`;

const TecnologiesSectionTitle = styled.h1 `
  margin:0;
  font-size: 32px;
  color: ${props => props.theme.titleColor};
  text-align:center;
  @media (max-width:480px){
    font-size:22px;
  }
`;

const TechnologiesWrapper = styled.div `
  ${'' /* display:grid;
  grid-template-columns: 25% 25% 25% 25%;
  column-gap: 10px;
  row-gap: 10px; */}
  margin-top:10px;
`;

const Image = styled.img `
  width:150px;
  min-width: 100px;
  ${'' /* place-self: center; */}
  margin: 1em 0;
  @media (max-width: 768px){
    & img{
      max-width: 100%;
      max-height:100%;
    }
  }
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