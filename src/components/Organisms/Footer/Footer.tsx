import React from 'react';
import { 
  Container, 
  IconContent, 
  GetNinjaIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  CopyText, 
  Content
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Content>
        <img src="/logo.png" />
        <IconContent>
          <a href="https://www.getninjas.com.br/anuncios/design-e-tecnologia/autocad-e-modelagem-3d/projetista-arquitetonico-e-modelagem-em-3d-jordana-mariano-barbosa?ref=internal" target="_blank">
            <GetNinjaIcon />
          </a>
          <a href="https://www.instagram.com/jordana.project/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/jordana-mariano-barbosa-81a120118/" target="_blank">
            <LinkedinIcon />
          </a>
        </IconContent>
      </Content>
      <CopyText>
        <p>Copyright © 2021. All rights reserved.</p>
        <a href="https://agenciapaladino.com.br/" target="_blank">Developed by Agência Paladino</a>
      </CopyText>
    </Container>
  )
}

export default Footer;