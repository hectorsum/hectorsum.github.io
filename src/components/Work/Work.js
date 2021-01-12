import React from 'react';
import styled from 'styled-components';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from './ProjectCard';

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

export const Work = () => {
  const {data,loading} = useProjects();
  loading ? console.log('Loading..') : console.log(data);
  document.title = 'Work | Hector Herrera'
  return (
    <WorkSection id="work">
      <WorkSectionTitle>work 🚀</WorkSectionTitle>
      <ContainerProject>
        {
          data.map( data => (
            <ProjectCard key={data.id} {...data} />
          ))
        }
      </ContainerProject>
    </WorkSection>
  )
}
