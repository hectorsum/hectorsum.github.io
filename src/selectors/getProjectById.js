import data from '../assets/json/projects.json';

export const getProjectById = (id) =>{
  return data.find(data => data.id === id );
}