import React from 'react'
import styled from 'styled-components'

const WorkSectionTitle = styled.h1 `
  font-size: 40px;
  color: ${props => props.theme.titleColor};
`;
const WorkSection = styled.div ` 
  display:relative;
  margin:0;
  padding: 5rem;
`;
export const Work = () => {
  return (
    <WorkSection id="work">
      <WorkSectionTitle>work 🚀</WorkSectionTitle>
    </WorkSection>
  )
}
