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
            <p>O Escritório JM produz design inovador baseado na observação das interações cotidianas, atuando em âmbito nacional, que guardam possibilidades espaciais e programática, mantendo o compromisso com princípios da qualidade.</p>
            <BlackButton type="button" text="Contato" href="#contato" />
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