import styled from 'styled-components';


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
    h3 {
      display: block;
      pointer-events: none;
      filter: brightness(150);
    }    
  }

  @media(max-width: 901px) {
    min-width: 49%;
  }

  @media(max-width: 767px) {
    min-width: 100%;
  }
  img {
    object-fit: cover;
    :hover {
      opacity: 0.8;
      filter:  brightness(50%);
    }
  }
`;