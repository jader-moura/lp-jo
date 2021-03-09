import React from 'react';
import Button from '../../Molecules/BlackButton/BlackButton';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import Counter from '../../Molecules/Counter/Counter';

import { BoxText, Container, CounterContent } from './styles';

interface props {
  subtitle: string,
  title: string,
  text: string,
  id: string,
}

const About = ({ subtitle, title, text, id }: props) => {

  return (
    <ContentWidth>
      <Container id={id}>
        <img src="/image-about.jpg" />
        <section>
          <BoxText>
            <h3>{subtitle = "Welcome to inner"}</h3>
            <h2>{title = "INNOVATIVE IDEAS STYLISH DESIGNS"}</h2>
            <p>{text = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."}</p>
            <Button href="#" text="Read More" />
          </BoxText>
          <CounterContent>
            <Counter countTotal={25} countText="Years of experience" key={1} />
            <Counter countTotal={38} countText="Years of experience"  key={2} />
          </CounterContent>
        </section>
      </Container>
    </ContentWidth>
  )
}

export default About;