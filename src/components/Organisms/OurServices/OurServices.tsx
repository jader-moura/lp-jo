import React from 'react';
import BlackButton from '../../Molecules/BlackButton/BlackButton';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import ServiceCard from '../../Molecules/ServiceCard/ServiceCard';
import { Container, TextContent, Content} from './styles';
import { OurServicesData } from './OurServicesData'


const OurServices = ({ id }) => {
  return(
    <Container id={id}>
      <ContentWidth>
        <Content>
          <TextContent>
            <h2>Nossos serviços</h2>
            <p>O Escritório JM produz design inovador baseado na observação das interações cotidianas, que guardam possibilidades espaciais e programáticas imprevisíveis. Estamos dedicados a defender os desejos e necessidades de nossos clientes.</p>
            <BlackButton text="Ver todos" href="#" />
          </TextContent>
          {OurServicesData.map((element, index) => {
            return (
              <ServiceCard 
                key={index}
                icontype={element.icontype}
                title={element.title}
                text={element.text}
                image={element.image}
              />
            )
          })}
        </Content>
      </ContentWidth>
    </Container>  
  );
}

export default OurServices;