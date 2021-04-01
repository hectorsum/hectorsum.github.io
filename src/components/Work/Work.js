import React, { useState } from 'react';
import styled from 'styled-components';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from './ProjectCard';
import projects_json from '../../assets/json/projects.json';
import ReactPaginate from 'react-paginate';

export const Work = () => {
  // const {data,loading} = useProjects()
  const [projects, setProjects] = useState(projects_json.slice(0,projects_json.length));
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 6;
  const projectsVisited = pageNumber * projectsPerPage;
  const displayProjects = projects.slice(projectsVisited, projectsVisited + projectsPerPage).map(project => {
    return (
      <ProjectCard key={project.id} {...project} />
    );
  })
  console.log('projects: ',projects)
  // loading ? console.log('Loading..') : console.log(data);
  const pageCount = Math.ceil(projects.length / projectsPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  document.title = 'Work | Hector Herrera';
  return (
    <WorkSection>
      <WorkSectionTitle>work 🚀</WorkSectionTitle>
      <ProjectsWrapper className="col-lg-12 mt-5 mb-5 d-flex justify-content-center">
        <ContainerProject className="row">
          {displayProjects}
          <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
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