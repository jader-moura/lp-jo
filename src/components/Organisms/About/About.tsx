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
              <p>Arquiteta e Urbanista, Jordana Mariano trabalha em carreira solo e em parcerias. Elaborando projetos capazes de explorar e experimentar a arquitetura em todos os seguimentos, dando os melhores resultados, estabelecendo um sistema de trabalho capaz de criar e implementar projetos afinados com o mercado e com ênfase na relação custo/benefício aos seus clientes.</p>
              <Button type="button" href="#contato" text="Entrar em contato" />
            </BoxText>
          </section>
        </Container>
      </ContentWidth>
    </WhiteCorretor>
  )
}

export default About;