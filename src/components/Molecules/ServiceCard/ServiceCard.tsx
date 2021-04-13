import React from 'react';
import { 
  Container, 
  PencilIcon, 
  ChairIcon, 
  PlantIcon, 
  HouseIcon, 
  CameraIcon 
} from './styles';

export interface ServiceCardProps {
  icontype?: 'pencilIcon' | 'chairIcon' | 'plantIcon' | 'houseIcon' | 'cameraIcon',
  title: string,
  text: string,
  image: string
}


const ServiceCard = ({ title, text, icontype, image }:ServiceCardProps) => {

  return (
    <Container image={image}>
      {icontype === 'pencilIcon' ? <PencilIcon /> : null }
      {icontype === 'chairIcon' ? <ChairIcon /> : null }
      {icontype === 'plantIcon' ? <PlantIcon /> : null }
      {icontype === 'houseIcon' ? <HouseIcon /> : null }
      {icontype === 'cameraIcon' ? <CameraIcon /> : null }
      <h3>{title}</h3>
      <p>{text}</p>
    </Container>
  )
}

export default ServiceCard;