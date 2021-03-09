import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  font-family: 'Heebo', sans-serif;
  
  h4 {
    color: var(--title);
    font-weight: 600;
    font-size: 32px;
    color: var(--title);
  }
  h4:after{
    content: "+";
  }
  h5 {
    color: var(--text);
    font-size: 1rem;
    line-height: 19px;
    font-weight: 300;
  }
`;