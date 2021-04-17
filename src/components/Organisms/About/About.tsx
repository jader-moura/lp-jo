import React from 'react';
import Button from '../../Molecules/BlackButton/BlackButton';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import { WhiteCorretor, BoxText, Container } from './styles';
import Image from 'next/image'

interface props {
  id: string,
}

const About = ({id} : props) => {
  return (
    <WhiteCorretor>
      <ContentWidth>
        <Container id={id}>
          <Image 
            src="/image-about.jpg" 
            alt="Foto de perfil de Jordana Mariano" 
            width={1365} 
            height={2048} 
          />
          <section>
            <BoxText>
              <h3>Bem-Vindos</h3>
              <h2>Jordana Mariano</h2>
              <p>Formada em Arquitetura e Urbanismo, Jordana Mariano trabalha em carreira solo fazendo muitas vezes parcerias com colegas de profissão, elabora projetos capazes de explorar e experimentar a arquitetura na mais ampla escala possível; desde casas, escolas, edifícios religiosos, hotéis, edifícios universitários, centros de recreação, acreditando em dar a soluções únicas para oferecer o melhor aos seus clientes.</p>
              <Button type="button" href="#contato" text="Entrar em contato" />
            </BoxText>
          </section>
        </Container>
      </ContentWidth>
    </WhiteCorretor>
  )
}

export default About;