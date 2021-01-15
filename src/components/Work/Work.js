import React from 'react';
import styled from 'styled-components';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from './ProjectCard';

export const Work = () => {
  const {data,loading} = useProjects();
  loading ? console.log('Loading..') : console.log(data);
  document.title = 'Work | Hector Herrera';
  return (
    <WorkSection>
      <WorkSectionTitle>work 🚀</WorkSectionTitle>
      <ProjectsWrapper className="col-lg-12 mt-5 mb-5 d-flex justify-content-center">
        <ContainerProject className="row">
          {
            data.map( data => (
              <ProjectCard key={data.id} {...data} />
            ))
          }
        </ContainerProject>
      </ProjectsWrapper>
    </WorkSection>
  )
}

export const ProjectsWrapper = styled.div `

`;

const WorkSectionTitle = styled.h1 `
  font-size: 40px;
  color: ${props => props.theme.titleColor};
`;
const WorkSection = styled.div ` 
  position:relative;
  margin:0;
  padding: 5rem;
  @media (max-width:800px){
    padding: 5rem 1rem;
  }
`;
export const ContainerProject = styled.div `
  width:100%;
  background-color:transparent;
  height:100%;
`;