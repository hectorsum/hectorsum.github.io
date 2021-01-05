import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import manosnortenas from '../../assets/images/manosnortenas.JPG';
import { DetailButton } from '../Button/DetailButton';

const WorkSectionTitle = styled.h1 `
  font-size: 40px;
  color: ${props => props.theme.titleColor};
`;
const WorkSection = styled.div ` 
  position:relative;
  margin:0;
  padding: 5rem;
`;
const ContainerProject = styled.div `
  width:100%;
  background-color:transparent;
  display:grid;
  grid-template-columns:33.3% 33.3% 33.3%;
  height:100%;
  row-gap:5px;
  column-gap:5px;
`;
const ProjectCard = styled.div `
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
  font-size:16px;
  color: ${props => props.theme.titleColor};
  text-align:left;
`;
const DescriptionProject = styled.p `
  font-size:15px;
  color: ${props => props.theme.paragraphColor};
  text-align:left;
`;

export const Work = () => {
  document.title = 'Work | Hector Herrera'
  return (
    <WorkSection id="work">
      <WorkSectionTitle>work 🚀</WorkSectionTitle>
      <ContainerProject>
        <ProjectCard>
          <PreviewImage src={manosnortenas} alt="Manos Nortenas Restaurant"/>
          <TitleProject>Manos Nortenas Restaurant</TitleProject>
          <DescriptionProject>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet assumenda cupiditate deleniti? Reiciendis obcaecati ullam dolores non atque quidem. Ea in tempore architecto quia dolores!</DescriptionProject>
          <hr/>
          <Link to={`./detail/manosnortenas`}>
            <DetailButton/>
          </Link>
        </ProjectCard>
        <ProjectCard>
          <PreviewImage src={manosnortenas} alt="Manos Nortenas Restaurant"/>
          <TitleProject>Manos Nortenas Restaurant</TitleProject>
          <DescriptionProject>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet assumenda cupiditate deleniti? Reiciendis obcaecati ullam dolores non atque quidem. Ea in tempore architecto quia dolores!</DescriptionProject>
          <hr/>
          <DetailButton/>
        </ProjectCard>
        <ProjectCard>
          <PreviewImage src={manosnortenas} alt="Manos Nortenas Restaurant"/>
          <TitleProject>Manos Nortenas Restaurant</TitleProject>
          <DescriptionProject>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet assumenda cupiditate deleniti? Reiciendis obcaecati ullam dolores non atque quidem. Ea in tempore architecto quia dolores!</DescriptionProject>
          <hr/>
          <DetailButton />
        </ProjectCard>
        <ProjectCard>
          <PreviewImage src={manosnortenas} alt="Manos Nortenas Restaurant"/>
          <TitleProject>Manos Nortenas Restaurant</TitleProject>
          <DescriptionProject>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet assumenda cupiditate deleniti? Reiciendis obcaecati ullam dolores non atque quidem. Ea in tempore architecto quia dolores!</DescriptionProject>
          <hr/>
          <DetailButton />
        </ProjectCard>
      </ContainerProject>
    </WorkSection>
  )
}
