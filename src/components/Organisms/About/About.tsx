import React from 'react';
import Button from '../../Molecules/BlackButton/BlackButton';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import Counter from '../../Molecules/Counter/Counter';

import { WhiteCorretor, BoxText, Container, CounterContent } from './styles';

interface props {
  subtitle: string,
  title: string,
  text: string,
  id: string,
}

const About = ({ subtitle, title, text, id }: props) => {

  return (
    <WhiteCorretor>
      <ContentWidth>
        <Container id={id}>
          <img src="/image-about.jpg" />
          <section>
            <BoxText>
              <h3>{subtitle = "Bem-Vindos"}</h3>
              <h2>{title = "Jordana Mariano"}</h2>
              <p>{text = "Formada em Arquitetura e Urbanismo, Jordana Mariano trabalha em carreira solo fazendo muitas vezes parcerias com colegas de profissão, elabora projetos capazes de explorar e experimentar a arquitetura na mais ampla escala possível; desde casas, escolas, edifícios religiosos, hotéis, edifícios universitários, centros de recreação, acreditando em dar a soluções únicas para oferecer o melhor aos seus clientes."}</p>
              <Button type="button" href="#contato" text="Entrar em contato" />
            </BoxText>
            {/* <CounterContent>
              <Counter countTotal={3} countText="Anos de experiência" key={1} />
              <Counter countTotal={29} countText="Projetos criados"  key={2} />
            </CounterContent> */}
          </section>
        </Container>
      </ContentWidth>
    </WhiteCorretor>
  )
}

export default About;