import React, { useEffect, useState } from 'react';
import { 
  Container, 
  TopBar, 
  Head, 
  Logo, 
  Menu, 
  MenuMobile,
  MapIcon, 
  PhoneIcon, 
  ClockIcon,
  MenuIcon,
  CloseIcon,
} from './styles';

const Header = () => {
  const[isMobile, setIsMobile] = useState(false);
  const[openToggle, setOpenToggle] = useState(false);

  useEffect(() => {
    if(window.innerWidth <= 767) {
      setIsMobile(true)
    }
  },[]);
  
  return (
    <Container>
      {!isMobile &&
        <TopBar>
          <label>
            <a href="https://goo.gl/maps/gVRkfFQGYw67r3Fk6" target="_blank"><MapIcon />Rua Modesto Batista, 3117. Vilhena, RO</a>
            <a href="tel:+5569993720758" target="_blank"><PhoneIcon />+55 (69) 99372-0758</a>
          </label>
          <label> 
            <a><ClockIcon />Funcionamento : Seg-Sex 08:00 - 17:00 hr</a>
          </label>
        </TopBar>
      }
      <Head>
        <Logo src="/logo-white.png"/>
        {isMobile ? 
          <>
            <MenuIcon onClick={() => setOpenToggle(true)} />
            {openToggle &&
              <MenuMobile>
                <a 
                  href="#" 
                  onClick={() => setOpenToggle(false)} 
                >
                  Home
                </a>
                <a 
                  href="#sobre" 
                  onClick={() => setOpenToggle(false)}
                >
                  Sobre
                </a>
                <a 
                  href="#servicos" 
                  onClick={() => setOpenToggle(false)}
                >
                  Serviços
                </a>
                <a 
                  href="#projetos" 
                  onClick={() => setOpenToggle(false)}
                >
                  Projetos
                </a>
                <a 
                  href="#contato" 
                  onClick={() => setOpenToggle(false)}
                >
                  Contato
                </a>
                <CloseIcon onClick={() => setOpenToggle(false)} />
              </MenuMobile>
            }
          </>
        :
          <Menu>
            <a href="#">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </Menu>
        }
      </Head>
    </Container>
  )
}

export default Header;