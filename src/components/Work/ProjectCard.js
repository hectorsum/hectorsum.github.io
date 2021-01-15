import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { WorkButton } from '../Button/WorkButton';

export const ProjectCard = ({id,name,description,preview_images}) => {
  console.log(preview_images)
  return (
    <div className="col-lg-4 col-md-6 p-0 px-2">
      <Card key={id} className="card m-0 mb-3">
        <PreviewImage src={Object.keys(preview_images)[0]} alt={name} className="card-img-top"/>
        <div className="card-body">
          <TitleProject>{name}</TitleProject>
          <DescriptionProject className="card-text">{description}</DescriptionProject>
          <Underline/>
          <Link to={`./detail/${id}`}>
            <WorkButton>See more.. ➡️</WorkButton>
          </Link>
        </div>
      </Card>
    </div>
  )
}

const Underline = styled.hr `
  color: ${props => props.theme.titleColor};
`;

const Card = styled.div `
  background-color:#191919;
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