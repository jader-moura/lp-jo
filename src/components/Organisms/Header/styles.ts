import styled from 'styled-components';
import { Map } from '@styled-icons/boxicons-solid/Map';
import { PhoneFill } from '@styled-icons/bootstrap/PhoneFill';
import { ClockFill } from '@styled-icons/bootstrap/ClockFill';
import { Menu2Outline } from '@styled-icons/evaicons-outline/Menu2Outline';
import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 150px;
  
  max-width: 1140px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const TopBar = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #FFFFFF14;
  padding: 1rem;
  label {
    display: flex;
    color: var(--white);
    font-family: 'Heebo', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    a {
      margin: 0 0.5rem;
    }
  }
`;

export const Head = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media(max-width: 767px) {
    margin-top: -2rem;
    padding: 0 1rem;
  }
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const Menu = styled.article`
  float: right;
  display: flex;
  a {
    color: var(--white);
    padding: 1rem;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    :hover {
      color: var(--main);
    }
  }
`;


export const MapIcon = styled(Map)`
  height: 15px;
  width: 15px;
  color: var(--main);
  margin-right: 0.5rem;
`;

export const PhoneIcon = styled(PhoneFill)`
  height: 15px;
  width: 15px;
  color: var(--main);
  margin-right: 0.5rem;
`;

export const ClockIcon = styled(ClockFill)`
  height: 15px;
  width: 15px;
  color: var(--main);
  margin-right: 0.5rem;
`;

export const MenuIcon = styled(Menu2Outline)`
  height: 30px;
  width: 30px;
  color: var(--white);
`;

export const CloseIcon = styled(CloseCircle)`
  height: 30px;
  width: 30px;
  color: var(--white);
  position: absolute;
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

export const MenuMobile = styled.div`
  background-color: var(--title);
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 3;
  a {
    color: var(--white);
    padding: 1rem;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    :hover {
      color: var(--main);
    }
  }

  animation: fade .2s  linear;

  @keyframes fade {
    0% { 
      opacity: 0;
    }
    100% { 
      opacity: 1;
    }
  }
`;