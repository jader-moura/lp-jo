import React from 'react';
import { 
  Container, 
  TopBar, 
  Head, 
  Logo, 
  Menu, 
  MapIcon, 
  PhoneIcon, 
  ClockIcon,
} from './styles';

const Header = () => {
  return (
    <Container>
      <TopBar>
        <label>
          <a href="#" target="_blank"><MapIcon />Rua das Palmeiras, Porto Velho - RO</a>
          <a href="#" target="_blank"><PhoneIcon />(+62) 81 2345 1234</a>
        </label>
        <label>
          <a href="#" target="_blank"><ClockIcon />Opening : Mon-Fri 08:00 - 17:00</a>
        </label>
      </TopBar>
      <Head>
        <Logo src="/logo-white.png"/>
        <Menu>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Menu>
      </Head>
    </Container>
  )
}

export default Header;