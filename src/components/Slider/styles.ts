import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('first-image.jpg');
  background-repeat: no-repeat center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px #00000099;
  `;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-transform: uppercase;
  font-weight: 600;

  h1 {
    font-size: 72px;
    letter-spacing: 1.2px;
    color: var(--main);
  }

  h2 {
    font-size: 56px;
    letter-spacing: 2px;
    color: var(--white);
  }

  button {
    color: var(--white);
    background-color: transparent;
    border: 1px solid var(--white);
    margin-top: 3rem;
    :hover {
      background-color: var(--white);
      color: var(--title);
    }
  }
`;