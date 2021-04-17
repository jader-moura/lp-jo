import React from 'react';
import ContentWidth from '../../Molecules/ContentWidth/ContentWidth';
import { Container, Content, Columns, ContactForm, Phone, MailIcon, WhatsappIcon, Input } from './styles';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ id }) => {
  function sendEmail(e) {
    e.preventDefault();
    if(!e.target.from_name.value){
      toast.error("Por favor preencha seu nome");
    } else if (!e.target.contact_email.value || !e.target.contact_email.value.includes('@')) {
      toast.error("Por favor preencha seu e-mail corretamente");
    } else {
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        e.target, 
        process.env.REACT_APP_EMAILJS_USER_ID
      )
        .then((result) => {
            toast.success("Obrigado. Seu e-mail foi enviado com sucesso!");
            e.target.reset();
          },
        (error) => {
          toast.error("Ocorreu um erro, por favor tente novamente!");
        });
      }
    }
    console.log(process.env);
      
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
              <input type="text" placeholder="Seu Nome" name="from_name" />
              <input 
                type="text" 
                placeholder="Seu E-mail" 
                name="contact_email" 
              />
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