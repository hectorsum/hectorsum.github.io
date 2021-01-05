import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailWorkSection = styled.div`
  position:relative;
  margin:0;
  padding: 5rem;
`;

export const DetailWork = () => {
  const {name} = useParams()
  console.log(name);
  return (
    <DetailWorkSection>
      <h1>{name}</h1>
    </DetailWorkSection>
  )
}
