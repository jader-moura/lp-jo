import React, { ReactNode } from 'react';
import { Container } from './styles';

interface props {
  children: ReactNode;
}

const ContentWidth = ({children}: props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ContentWidth;