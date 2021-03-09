import React from 'react';
import { Container, Icon } from './styles';

export interface props {
  title: string,
  text: string
}

const ServiceCard = ({ title, text }:props) => {
  return (
    <Container>
      <Icon />
      <h3>{title}</h3>
      <p>{text}</p>
    </Container>
  )
}

export default ServiceCard;