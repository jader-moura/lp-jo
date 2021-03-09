import React, { useEffect, useState } from 'react';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import { Container, Content } from './styles';
import { SliderData } from './SliderData';


const Slider  = () => {
  const [slide, setSlide] = useState(0);
  const length = SliderData.length;

  let countdownTimeout: NodeJS.Timeout;

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  }

  useEffect(() => {
    countdownTimeout = setTimeout(() => {
      nextSlide();
    }, 3000);
  }, [slide])

  return (
    <>
      {SliderData.map((element, index) => {
        return (
          <>
            {index === slide && (
              <Container src={element.image} key={index}>
                <ContentWidth>
                  <Content>
                    <h1>Interior designs</h1>
                    <h2>From the future</h2>
                    <button>View portfolio</button>
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