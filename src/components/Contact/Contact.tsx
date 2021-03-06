import React from 'react';
import BlackButton from '../Atoms/BlackButton/BlackButton';
import ContentWidth from '../Atoms/ContentWidth/ContentWidth';
import { Container, Content, Columns, ContactForm, Phone, MailIcon, WhatsappIcon } from './styles';

const Contact = () => {
  return (
    <Container>
      <ContentWidth>
        <Content>
          <Columns>
            <h2>Get in touch</h2>
            <p>Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts. Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts.</p>
            <a href="#"><Phone />(+62) 81 2345 1234</a>
            <a href="#"><MailIcon />contact@domain.com</a>
            <a href="#"><WhatsappIcon />(+62) 81 2345 1234</a>
          </Columns>
          <Columns>
            <ContactForm>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Your Subject" />
              <textarea placeholder="Your Message" />
              <BlackButton type="submit" href="#" text="Send Message" />
            </ContactForm>
          </Columns>
        </Content>
      </ContentWidth>
    </Container>
  )
}

export default Contact;