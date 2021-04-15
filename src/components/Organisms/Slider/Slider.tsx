import React, { useEffect, useState } from 'react';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import { Container, SliderImg, Content } from './styles';
import { SliderData } from './SliderData';


const Slider  = ({ id }) => {
  const [slide, setSlide] = useState(0);
  const length = SliderData.length;

  let countdownTimeout: NodeJS.Timeout;

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  }

  useEffect(() => {
    countdownTimeout = setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [slide])

  return (
    <>
      {SliderData.map((element, index) => {
        return (
          <>
            {index === slide && (
              <Container key={index}>
                <SliderImg src={element.image} />
                  <ContentWidth>
                    <Content>
                      <h1>Jordana Mariano</h1>
                      <h2>Arquitetura | Urbanismo | Paisagísmo</h2>
                      <button>Ver projetos</button>
                    </Content>
                  </ContentWidth>
              </Container>
            )}
          </>
        )
      })}
    </>
  )
}

export default Slider;