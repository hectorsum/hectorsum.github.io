import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProjectById } from '../../selectors/getProjectById';
import { Button } from '../Button/Button';
import codeicon from '../../assets/images/code.svg'
import internet from '../../assets/images/internet.svg'

export const DetailWork = () => {
  const {id} = useParams()
  const {name,libraries,tecnologies_used} = getProjectById(id);
  return (
    <DetailWorkSection className="container">
      <ProjectTitle>{name}</ProjectTitle>
      <Underline/>
      <div className="container row m-0 p-0">
        <WrapperInfo className="col-md-4 p-2">
          <Tecnologies className="mb-3 d-flex flex-column align-items-center justify-content-center">
            <TecnologiesTitle className="m-0 p-0">Tecnologies used</TecnologiesTitle>
            <div className="p-3">
              {
                tecnologies_used.map( item => (
                  <img key={item} src={item} alt={item}/>
                ))
              }
            </div>
          </Tecnologies>
          <Info className="">
            <InfoTitle className="m-0 p-0">Info</InfoTitle>
            <div className="p-3">
              <Button className="mb-2"> <img src={codeicon} width="24" height="24" alt="code icon"/> Code</Button>
              <Button> <img src={internet} width="24" height="24" alt="code icon"/> Code</Button>
            </div>
          </Info>
        </WrapperInfo>
        <Carousel id="carouselExampleControls" className="carousel slide col-md-8 p-0" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`/project-images/bestwestern.JPG`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={`/project-images/manosnortenas.JPG`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={`/project-images/bestwestern.JPG`} className="d-block w-100" alt="..."/>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        </Carousel>
      </div>
    </DetailWorkSection>
  )
}

const InfoTitle = styled.h1`
  color:${props => props.theme.titleColor };
  font-size:24px;
  text-align:center;
`;

const TecnologiesTitle = styled.h1`
  color:${props => props.theme.titleColor };
  font-size:24px;
`;

const WrapperInfo = styled.div `
  /* margin-right:20px; */
`;

const Info = styled.div `
  background-color:#191919;
  border: 1px solid ${props => props.theme.titleColor };
`;

const Carousel = styled.div `
  background-color:#191919;
`;

const Tecnologies = styled.div `
  background-color:#191919;
  border: 1px solid ${props => props.theme.titleColor };
`;

const ProjectTitle = styled.h1 `
  color: ${ props => props.theme.titleColor };
  text-align:center;
`;

const DetailWorkSection = styled.div`
  padding:2rem;
`;

const Underline = styled.hr `
  color: ${ props => props.theme.titleColor };
`;