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
          <a href="#" target="_blank"><MapIcon />Rua Modesto Batista, 3117. Vilhena, RO</a>
          <a href="#" target="_blank"><PhoneIcon />(+62) 81 2345 1234</a>
        </label>
        <label>
          <a href="#" target="_blank"><ClockIcon />Funcionamento : Seg-Sex 08:00 - 17:00 hr</a>
        </label>
      </TopBar>
      <Head>
        <Logo src="/logo-white.png"/>
        <Menu>
          <a href="#">Home</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </Menu>
      </Head>
    </Container>
  )
}

export default Header;