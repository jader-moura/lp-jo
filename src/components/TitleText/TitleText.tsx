import React from 'react';
import Button from '../Atoms/BlackButton/BlackButton';
import ContentWidth from '../Atoms/ContentWidth/ContentWidth';

import { BoxText, Container, Counter, CounterContent } from './styles';

const TitleText = () => {
  return (
    <ContentWidth>
      <Container>
        <img src="/image-about.jpg" />
        <section>
          <BoxText>
            <h3>Welcome to inner</h3>
            <h2>INNOVATIVE IDEAS STYLISH DESIGNS</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <Button href="#" text="Read More" />
          </BoxText>
          <CounterContent>
            <Counter>
              <h4>25</h4>
              <h5>Years of Experience</h5>
            </Counter>
            <Counter>
              <h4>25</h4>
              <h5>Years of Experience</h5>
            </Counter>
          </CounterContent>
        </section>
      </Container>
    </ContentWidth>
  )
}

export default TitleText;