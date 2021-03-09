import styled from 'styled-components';

interface SliderProps {
  src: string;
}


export const Container = styled.div<SliderProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px #00000099;
  /* opacity: 1;
  animation: fade 1s linear;
  @keyframes fade {
  0% { opacity: 0.5 }
  100% { opacity: 1 }
  } */
  `;
export const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-transform: uppercase;
  font-weight: 600;
  img {
    height: 100px;
    width: 100px;
    z-index: 9999999;
  }
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
    transition: .2s ease-in;
    :hover {
      background-color: var(--white);
      color: var(--title);
    }
  }
`;