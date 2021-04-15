import styled from 'styled-components';

interface SliderProps {
  src: string;
}


export const Container = styled.div<SliderProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat center;
  background-size: 100% 100%;
  box-shadow:inset 0 0 0 2000px #00000099;
  animation: zoomin 15s  linear;
  object-fit: cover;
  @keyframes zoomin {
    0% { 
      background-size: 100% 100%;
    }
    100% { 
      background-size: 110% 110%;
    }
  }
  `;
export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  h1 {
    font-size: 72px;
    letter-spacing: 1.2px;
    color: var(--main);
  }

  h2 {
    font-size: 35px;
    font-weight: 300;
    letter-spacing: 2px;
    color: var(--white);
  }

  button {
    color: var(--white);
    background-color: transparent;
    border: 1px solid var(--white);
    margin-top: 3rem;
    transition: .2s ease-in;
    :hover {
      background-color: var(--white);
      color: var(--title);
    }
  }

  @media(max-width: 901px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 22px;
    }
  }
  @media(max-width: 567px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 16px;
    }
  }
`;