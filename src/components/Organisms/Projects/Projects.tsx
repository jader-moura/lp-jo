import React from 'react';
import ProjectCard from '../../Molecules/ProjectCard/ProjectCard';
import { Container, Texts, Titles, Portfolio } from './styles';

const Projects = () => {
  return (
    <Container>
      <Texts>
        <Titles>
          <h2>Latest projects</h2>
          <h3>Portfolio</h3>
        </Titles>
        <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>
      </Texts>
      <Portfolio>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Portfolio>
    </Container>
  )
}

export default Projects;