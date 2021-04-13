import React from 'react';
import { Container } from './styles';

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
      <Container image={image} key={key} onClick={onclick}>
        <h3>{title}</h3>
        <p>{text}</p>
      </Container>
      {/* {modalActived && <Modal onClick={closeModal}> <ModalImage key={id} src={image}/> </Modal>} */}
    </>
  )
}

export default ProjectCard;