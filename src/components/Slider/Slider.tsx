import React from 'react';
import ContentWidth from '../Atoms/ContentWidth/ContentWidth';
import { Container, Content } from './styles';

const Slider = () => {
  return (
    <Container>
      <ContentWidth>
        <Content>
          <h1>Interior designs</h1>
          <h2>From the future</h2>
          <button>View portfolio</button>
        </Content>
      </ContentWidth>
    </Container>
  )
}

export default Slider;