import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { WorkButton } from '../Button/WorkButton';

export const ProjectCard = ({id,name,description}) => {
  return (
    <Card key={id}>
      <PreviewImage src={`./project-images/${id}.JPG`} alt={name} className="card-img-top"/>
      <TitleProject>{name}</TitleProject>
      <DescriptionProject className="card-text">{description}</DescriptionProject>
      <Underline/>
      <Link to={`./detail/${id}`}>
        <WorkButton>See more.. ➡️</WorkButton>
      </Link>
    </Card>
  )
}

const Underline = styled.hr `
  color: ${props => props.theme.titleColor};
`;

const Card = styled.div `
  width: 90%;
  height: auto;
  background-color:#191919;
  /* border:2px solid white; */
  justify-self:center;
  margin:8px;
  padding:8px;
  box-shadow: rgba(87, 87, 87, 60) 0px 0.2rem 0.4rem;
  border-radius:5px;
`;
const PreviewImage = styled.img `
  width:100%;
  height:auto;
`;
const TitleProject = styled.h1 `
  font-size:17px;
  color: ${props => props.theme.titleColor};
  text-align:left;
  margin-top:8px;
`;
const DescriptionProject = styled.p `
  font-size:15px;
  color: ${props => props.theme.paragraphColor};
  text-align:left;
  margin:0;
`;