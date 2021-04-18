import React from 'react';
import { Container } from './styles';
import Image from 'next/image';

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
        <Image src={image} layout="fill" className="next-image" />
        <h3>{title}</h3>
        <p>{text}</p>
      </Container>
    </>
  )
}

export default ProjectCard;