import React from 'react';
import { 
  Container, 
  IconContent, 
  FacebookIcon, 
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
          <a href="#" target="_blank">
            <FacebookIcon />
          </a>
          <a href="#" target="_blank">
            <InstagramIcon />
          </a>
          <a href="#" target="_blank">
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