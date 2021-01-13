import React from 'react';
import styled from 'styled-components';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from './ProjectCard';

export const Work = () => {
  const {data,loading} = useProjects();
  loading ? console.log('Loading..') : console.log(data);
  document.title = 'Work | Hector Herrera'
  return (
    <WorkSection className="p-5">
      <WorkSectionTitle>work 🚀</WorkSectionTitle>
      <div className="col-lg-12 mt-5 mb-5">
        <ContainerProject className="row">
          {
            data.map( data => (
              <ProjectCard key={data.id} {...data} />
            ))
          }
        </ContainerProject>
      </div>
    </WorkSection>
  )
}

const WorkSectionTitle = styled.h1 `
  font-size: 40px;
  color: ${props => props.theme.titleColor};
`;
const WorkSection = styled.div ` 
  position:relative;
  margin:0;
  ${'' /* padding: 5rem; */}
`;
const ContainerProject = styled.div `
  width:100%;
  background-color:transparent;
  ${'' /* display:grid; */}
  ${'' /* grid-template-columns:33.3% 33.3% 33.3%; */}
  height:100%;
  ${'' /* row-gap:5px; */}
  ${'' /* column-gap:5px; */}
`;