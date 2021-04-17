import styled from 'styled-components';
import Image from 'next/image'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

export const SliderImg = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
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

export const ImageSrc = styled(Image)`
  filter:  contrast(100%) brightness(60%);
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
  transform: translateY(100%);

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

  a {
    color: var(--white);
    background-color: transparent;
    border: 1px solid var(--white);
    margin-top: 3rem;
    transition: .2s ease-in;
    padding: 1.5rem 5rem;
    :hover {
      background-color: var(--white);
      color: var(--title);
    }
  }

  @media(max-width: 901px) {
    transform: translateY(150%);

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