import styled from 'styled-components';
import { Map } from '@styled-icons/boxicons-solid/Map';
import { PhoneFill } from '@styled-icons/bootstrap/PhoneFill';
import { ClockFill } from '@styled-icons/bootstrap/ClockFill';

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

export const StyckyHeader = styled.div`
  background-color: var(--title);
  height: 150px;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;