import React from 'react';
import { Container, ProjectImage } from './styles';

interface ProjectCardProps {
  title: string,
  text: string,
  image: string,
  key: number,
  onclick: () => void
}

const ProjectCard = ({ title, text, image, key, onclick}:ProjectCardProps) => {


  return (
    <>
      <Container key={key} onClick={onclick}>
        <ProjectImage src={image} layout="fill" />
        <h3>{title}</h3>
        <p>{text}</p>
      </Container>
    </>
  )
}

export default ProjectCard;