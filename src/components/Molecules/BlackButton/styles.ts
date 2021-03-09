import styled from 'styled-components';

export const Button = styled.a`
  color: var(--white);
  background-color: var(--title);
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: 'Heebo', sans-serif;
  padding: 15px 50px;
  border: 1px solid var(--title);
  transition: .2s ease-in;
  :hover {
    background-color: transparent;
    color: var(--title);
  }
`;
