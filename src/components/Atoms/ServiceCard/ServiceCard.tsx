import React from 'react';
import { Container, Icon } from './styles';

export interface props {
  actived?: boolean;
}

const ServiceCard = ({ actived }:props) => {
  return (
    <Container actived={actived} >
      <Icon />
      <h3>Residential Design</h3>
      <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
    </Container>
  )
}

export default ServiceCard;