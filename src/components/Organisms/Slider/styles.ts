import styled from 'styled-components';

interface SliderProps {
  src: string;
}


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

export const SliderImg = styled.div<SliderProps>`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px #00000099;
  animation: zoomin 15s  linear;
  white-space: nowrap;
  z-index: -1;

  @keyframes zoomin {
    0% { 
      transform: scale(1);
    }
    100% { 
      transform: scale(1.5);
    }
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  z-index: 2;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  height: 100%;
  transform: translateY(150%);
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
    transform: translateY(180%);

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