import React from 'react';
import BlackButton from '../../Molecules/BlackButton/BlackButton';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import ServiceCard from '../../Molecules/ServiceCard/ServiceCard';
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
          <ServiceCard 
            title="Residential Design" 
            text="We bring the right people together to challenge established thinking and drive transform in 2020" 
          />
          <ServiceCard 
            title="Residential Design" 
            text="We bring the right people together to challenge established thinkingdrive transform in 2020" 
          />
          <ServiceCard 
            title="Residential Design" 
            text="We bring the right people together to challenge established thinking and drive transform in 2020" 
          />
          <ServiceCard 
            title="Residential Design" 
            text="We bring the right people together to challenge established thinkin drive transform in 2020" 
          />
          <ServiceCard 
            title="Residential Design" 
            text="We bring the right people together to challenge established thinkin drive transform in 2020" 
          />
        </Content>
      </ContentWidth>
    </Container>  
  );
}

export default OurServices;