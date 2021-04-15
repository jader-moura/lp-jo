import styled from 'styled-components';
import { PhoneFill } from '@styled-icons/bootstrap/PhoneFill';
import { Mail } from '@styled-icons/heroicons-solid/Mail';
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp';

export const Container = styled.div`
  background-color: var(--title);
  padding: 4rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Columns = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  h2 {
    font-weight: 600;
    font-size: 32px;
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    max-width: 80%;
  }

  a {
    padding-top: 1rem;
    display: flex;
    align-content: center;
    :hover {
      color: var(--main);
    }
  }

  @media(max-width: 901px) {
    width: 100%;
  }
`;

export const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--white);
  padding: 60px;
  
  textarea {
    height: 170px;
  }
  input {
    height: 50px;
  }

  input, textarea {
    width: 100%;
    color: var(--text);
    border-radius: none;
    border: 1px solid #e7e7e7;
    padding: .375rem .75rem;
    font-size: 1rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding-left: 30px;
    box-shadow: none;
    margin-bottom: 1rem;
    :hover {
      border-color: #181818;
    }
  }

  @media(max-width: 901px) {
    padding: 30px;
    margin-top: 3rem;
  }
`;

export const Phone = styled(PhoneFill)`
  color: var(--main);
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export const MailIcon = styled(Mail)`
  color: var(--main);
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export const WhatsappIcon = styled(Whatsapp)`
  color: var(--main);
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

