import styled from 'styled-components';
import Image from 'next/image';


export const Container = styled.div`
  height: 400px;
  flex: 1;
  min-width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  text-align: center;
  color: var(--white);
  transition: .2s ease-in;

  h3 {
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 0.5rem;
    font-size: 20px;
    transition: .5s ease-in;
  }

  p {
    font-family: 'Heebo' , sans-serif;
    font-weight: 300;
    line-height: 24px;
    color: #ffffff95;
    font-size: 1rem;
    transition: .5s ease-in;
  }

  h3 {
    max-width: 60%;
    display: none;
  }

  :hover {
    box-shadow:inset 0 0 0 2000px #00000099;
    h3 {
      display: block;
      filter: brightness(150);
    }
  }

  @media(max-width: 901px) {
    min-width: 49%;
  }

  @media(max-width: 767px) {
    min-width: 100%;
  }
`;

export const ProjectImage = styled(Image)`
  object-fit: cover;
  :hover {
    opacity: 0.6;
    filter:  brightness(30%);
  }
`;

