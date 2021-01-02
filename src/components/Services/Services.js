import React from 'react'
import styled from 'styled-components'

const ServicesSection = styled.div `
  display:relative;
  margin:0;
`;

const ServicesSectionTitle = styled.h1 `
  font-size: 40px;
`;

const ServicesWrapper = styled.div `
  display:flex;
`;

const ServiceItem = styled.article `

`;


export const Services = () => {
  return (
    <ServicesSection>
      <ServicesSectionTitle>services</ServicesSectionTitle>
      <ServicesWrapper>
        <ServiceItem>
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellat consequatur ipsum doloribus optio eveniet hic porro. Rerum repudiandae itaque dolore quasi amet non ex illo? Unde velit enim reiciendis!</p>
        </ServiceItem>
        <ServiceItem>
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellat consequatur ipsum doloribus optio eveniet hic porro. Rerum repudiandae itaque dolore quasi amet non ex illo? Unde velit enim reiciendis!</p>
        </ServiceItem>
        <ServiceItem>
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repellat consequatur ipsum doloribus optio eveniet hic porro. Rerum repudiandae itaque dolore quasi amet non ex illo? Unde velit enim reiciendis!</p>
        </ServiceItem>
      </ServicesWrapper>
    </ServicesSection>
  )
}
