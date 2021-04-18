import styled from 'styled-components';
import { Spinner10 } from '@styled-icons/icomoon/Spinner10';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Loader = styled.div`
  position: fixed;
  z-index: 99;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const SpinnerIcon = styled(Spinner10)`
  color: var(--main);
  width: 5rem;
  height: 5rem;
  animation: 2s linear rotate infinite;

  @keyframes rotate{
    0% {
    transform: rotate(0deg);
    } 
    100% {
    transform: rotate(360deg);
    }
  }
`;