import React from 'react';
import BlackButton from '../../Molecules/BlackButton/BlackButton';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import { Container, Content, Columns, ContactForm, Phone, MailIcon, WhatsappIcon } from './styles';

const Contact = ({ id }) => {
  return (
    <Container id={id}>
      <ContentWidth>
        <Content>
          <Columns>
            <h2>Entre em contato</h2>
            <p>Tem alguma dúvida ou sugestão? Estamos a disposição para esclarecimentos, entre em contato conosco através do telefone/whatsapp ou nos envie um e-mail!</p>
            <a href="tel:+5569993720758" target="_blank"><Phone />+55 (69)99372-0758</a>
            <a href="mailto:contato@jordanamariano.com.br" target="_blank"><MailIcon />contato@jordanamariano.com.br</a>
            <a href="https://api.whatsapp.com/send/?phone=5569993720758" target="_blank"><WhatsappIcon />+55 (69)99372-0758</a>
          </Columns>
          <Columns>
            <ContactForm>
              <input type="text" placeholder="Seu Nome" />
              <input type="text" placeholder="Seu E-mail" />
              <input type="text" placeholder="Assunto" />
              <textarea placeholder="Sua Mensagem" />
              <BlackButton type="submit" href="#" text="Enviar Mensagem" />
            </ContactForm>
          </Columns>
        </Content>
      </ContentWidth>
    </Container>
  )
}

export default Contact;