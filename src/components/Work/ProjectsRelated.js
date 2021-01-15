import React from 'react'
import styled from 'styled-components'
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from './ProjectCard';
import { ContainerProject, ProjectsWrapper } from './Work';

export const ProjectsRelated = ({id}) => {
  const {data,loading} = useProjects();
  const projects = data.filter(project => project.id !== id)
  loading ? console.log('Loading..') : console.log(projects);
  return (
    <Related className="p-4 d-flex justify-content-center flex-column">
      <Title>Related Projects</Title>
      <div className="d-flex justify-content-center">
        <Underline/>
      </div>
      <ProjectsWrapper className="container col-lg-12 mt-5 mb-5 d-flex justify-content-center">
        <ContainerProject className="row">
          {
            projects.map( project => (
              <ProjectCard key={project.id} {...project} />
            ))
          }
        </ContainerProject>
      </ProjectsWrapper>
    </Related>
  )
}

const Underline = styled.div `
  /* color:${props => props.theme.brandColor}; */
  border:1.5px solid ${props => props.theme.brandColor};
  background-color:${props => props.theme.brandColor};
  width:30%;
`;

const Related = styled.div `
  background-color:#191919;
`;
const Title = styled.h1 `
  text-align:center;
  /* margin:0; */
  color: ${props => props.theme.titleColor};
`;