import styled from 'styled-components';
import { House } from '@styled-icons/bootstrap/House';

export const Container = styled.div`
  background-color: var(--white);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  max-width: 32%;
  margin-bottom: 2rem;
  h3 { 
    font-size: 1.5rem;
    color: var(--title);
    font-weight: 600;
    margin: 1rem 0;
  }
  :hover {
    background-image: url('/first-image.jpg');
    box-shadow:inset 0 0 0 2000px #00000099;
    background-repeat: no-repeat center;
    background-size: cover;
    h3, p {
      color: var(--white);
    }
    Icon {
      color: var(--white);
    }
  }
`;

export const Icon = styled(House)`
  color: var(--main);
  width: 2rem;
`;