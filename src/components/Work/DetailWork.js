import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProjectById } from '../../selectors/getProjectById';
import { Button } from '../Button/Button';
import { ProjectsRelated } from './ProjectsRelated';

export const DetailWork = () => {
  const {id} = useParams()
  const {name,tecnologies_used,preview_images} = getProjectById(id);
  return (
    <>
      <DetailWorkSection className="container p-2">
      <div className="container p-0 m-0 d-flex justify-content-between align-items-end row">
      <Tecnologies className="col d-flex flex-column align-items-left justify-content-center p-4">
        <TecnologiesTitle className="mb-2 p-0">Tecnologies used</TecnologiesTitle>
          <div>
            {
              tecnologies_used.map( item => (
                <img key={item} src={item} alt={item} />
              ))
            }
          </div>
          <div className="row mt-3">
            <Button>  
            <svg strokeWidth="currentColor" fill="currentColor" viewBox="0 0 576 512" style={{position:'relative;top:2px',height:'1em',width:'1em'}} xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            Code
            </Button>
            <Button> 
            <svg strokeWidth="currentColor" fill="currentColor" viewBox="0 0 576 512" style={{position:'relative;top:2px',height:'1em',width:'1em'}} xmlns="http://www.w3.org/2000/svg"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg> 
            Website
            </Button>
          </div>
        </Tecnologies>
        <ProjectTitle className="col m-0">{name}</ProjectTitle>
      </div>
      <Underline/>
      <div className="container row m-0 p-0 mb-5">
        <Carousel id="carouselExampleDark" className="carousel carousel-dark slide carousel-fade col-md-12 p-0" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            {
              Object.keys(preview_images).map((image,index) => (
                <li key={index} data-bs-target="#carouselExampleDark" data-bs-slide-to={index++} className={(index === 0 ? 'active' : '')}></li>
              ))
            }
          </ol>
          <div className="carousel-inner">
            {
              Object.keys(preview_images).map((image,index) => (
                <div className={'carousel-item '+ (index === 0 ? 'active' : '')} data-bs-interval="3000" key={image}>
                  <img src={image} className="d-block w-100" alt="carta" border="0"/>
                  <div className="carousel-caption d-none d-md-block mb-4">
                    <PreviewTitle>{Object.values(preview_images)[index]}</PreviewTitle>
                  </div>
                </div>
              ))
            }
          </div>
          <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </Carousel>
      </div>
    </DetailWorkSection>
    <ProjectsRelated id={id}/>
    </>
  )
}

const PreviewTitle = styled.h1 `
  font-family: 'Work Sans', sans-serif;
`;

const TecnologiesTitle = styled.h1`
  color:${props => props.theme.titleColor };
  font-size:24px;
`;


const Carousel = styled.div `
  background-color:#191919;
`;

const Tecnologies = styled.div `
  background-color:rgba(0,0,0,0.3);
  box-sizing:border-box;
  width: auto;
  max-width:400px;
  min-width:120px;
`;

const ProjectTitle = styled.h1 `
  color: ${ props => props.theme.titleColor };
  text-align:right;
`;

const DetailWorkSection = styled.div`
  padding:2rem;
`;

const Underline = styled.hr `
  color: ${ props => props.theme.titleColor };
`;