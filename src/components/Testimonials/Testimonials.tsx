import React from 'react';
import Testimony from '../Atoms/Testimony/Testimony';
import { Container, TestimonialContent } from './styles';

const Testimonials = () => {
  return (
    <Container>
      <img src="/first-image.jpg" />
      <TestimonialContent>
        <h2>TESTIMONIALS</h2>
        <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>
        <Testimony />
      </TestimonialContent>
    </Container>
  )
}

export default Testimonials;