import React, { useState } from 'react';
import { 
  Container, 
  PencilIcon, 
  Content,
  ChairIcon, 
  PlantIcon, 
  HouseIcon, 
  CameraIcon,
} from './styles';
import Image from 'next/image'


export interface ServiceCardProps {
  icontype?: string,
  title: string,
  text: string,
  image: string
}

const ServiceCard = ({ title, text, icontype, image }:ServiceCardProps) => {
  const[activeImg, setActiveImg] = useState(false);

  const mouseEnter = () => {
    setActiveImg(true)
  }

  const mouseLeave = () => {
    setActiveImg(false)
  }

  return (
    <Container onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      
      {activeImg &&
        <Image src={image} layout="fill" />
      }
      <Content>
        {icontype === 'pencilIcon' ? <PencilIcon /> : null }
        {icontype === 'chairIcon' ? <ChairIcon /> : null }
        {icontype === 'plantIcon' ? <PlantIcon /> : null }
        {icontype === 'houseIcon' ? <HouseIcon /> : null }
        {icontype === 'cameraIcon' ? <CameraIcon /> : null }
        <h3>{title}</h3>
        <p>{text}</p>
      </Content>
    </Container>
  )
}

export default ServiceCard;