import styled from 'styled-components';
import { WindowClose } from '@styled-icons/fa-regular/WindowClose';
import { LeftArrow } from '@styled-icons/boxicons-solid/LeftArrow';
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';
import Image from 'next/image'

export const Container = styled.div`
  background: rgba(24, 24, 24, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 4rem 1rem;

  h3 {
    color: var(--white);
    padding: 2rem;
    animation: fade .8s;

    @keyframes fade {
      0% { 
        opacity: 0;
      }
      100% { 
        opacity: 1;
      }
    }
  }
`;

export const ModalImage = styled(Image)`
  margin: 0 auto;
  animation: fade .5s  linear;
  @keyframes fade {
    0% { 
      transform: scale(0.8);
      opacity: 0;
    }
    100% { 
      transform: scale(1);
      opacity: 1;
    }
  }

`;

export const CloseIcon = styled(WindowClose)`
  color: red;
  width: 2rem;
  position: absolute;
  top: 5vh;
  right: 5vw;
  cursor: pointer;
`;

export const Row = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;  
`;


export const LeftIcon = styled(LeftArrow)`
  width: 2rem;
  cursor: pointer;
  color: var(--white);
`;


export const RightIcon = styled(RightArrow)`
  width: 2rem;
  cursor: pointer;
  color: var(--white);
`;

