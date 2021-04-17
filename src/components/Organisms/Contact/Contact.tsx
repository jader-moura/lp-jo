import React from 'react';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import { Container, Content, Columns, ContactForm, Phone, MailIcon, WhatsappIcon, Input } from './styles';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ id }) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          toast.success("Obrigado. Seu e-mail foi enviado com sucesso!");
          
        }, (error) => {
          console.log(error.status);
          toast.error("Ocorreu um erro, por favor tente novamente!");
          
        });
      }
      
  return (
    <Container id={id}>
      <ToastContainer />
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
            <ContactForm onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <input type="text" placeholder="Seu Nome" name="user_name" />
              <input type="text" placeholder="Seu E-mail" name="user_email" />
              <input type="text" placeholder="Assunto" name="subject" />
              <textarea placeholder="Sua Mensagem" name="message" />
              <Input type="submit" value="Enviar Mensagem" />
            </ContactForm>
          </Columns>
        </Content>
      </ContentWidth>
    </Container>
  )
}

export default Contact;