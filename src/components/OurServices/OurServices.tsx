import React from 'react';
import BlackButton from '../Atoms/BlackButton/BlackButton';
import ContentWidth from '../Atoms/ContentWidth/ContentWidth';
import ServiceCard from '../Atoms/ServiceCard/ServiceCard';
import { Container, TextContent, Content} from './styles';

const OurServices = () => {
  return(
    <Container>
      <ContentWidth>
        <Content>
          <TextContent>
            <h2>Our services</h2>
            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>
            <BlackButton text="View all" href="#" />
          </TextContent>
          <ServiceCard />
          <ServiceCard actived/>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </Content>
      </ContentWidth>
    </Container>  
  );
}

export default OurServices;