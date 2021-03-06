import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  flex: 1;
  min-width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('/first-image.jpg');
  background-repeat: no-repeat center;
  background-size: cover;

  text-align: center;
  color: var(--white);

  h3 {
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 0.5rem;
    font-size: 20px;
  }
  p {
    font-family: 'Heebo' , sans-serif;
    font-weight: 300;
    line-height: 24px;
    color: #ffffff95;
    font-size: 1rem;
  }

  h3, p {
    max-width: 60%;
    display: none;
  }

  :hover {
    box-shadow:inset 0 0 0 2000px #00000099;
    h3, p {
      display: block;
    }
  }
`;
