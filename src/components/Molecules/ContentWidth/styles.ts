import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media(max-width: 1140px){
    width: 100%;
    padding: 2rem;
  }
`;
