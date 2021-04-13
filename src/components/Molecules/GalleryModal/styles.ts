import styled from 'styled-components';
import { WindowClose } from '@styled-icons/fa-regular/WindowClose';
import { ArrowLeftSquare } from '@styled-icons/bootstrap/ArrowLeftSquare';
import { ArrowRightSquare } from '@styled-icons/bootstrap/ArrowRightSquare';


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
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ModalImage = styled.img`
  margin: 0 auto;
  width: 80vw;
  height: auto;
`;

export const CloseIcon = styled(WindowClose)`
  color: red;
  width: 2rem;
  position: absolute;
  top: 15vh;
  right: 8vw;
  cursor: pointer;
`;

export const Arrows = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
`;


export const LeftArrow = styled(ArrowLeftSquare)`
  width: 2rem;
  color: var(--white);
`;


export const RightArrow = styled(ArrowRightSquare)`
  width: 2rem;
  color: var(--white);
`;

