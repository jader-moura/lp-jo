import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 0;
  display: flex;
  img {
    max-width: 500px;
  }
  section {
    display: flex;
    flex-direction: column;
    margin-right: 150px;
  }
`;

export const BoxText = styled.div`
  background-color: var(--white);
  box-shadow: 0px 5px 30px 0px rgb(0 0 0 / 10%);
  padding: 60px;
  margin: 60px 0  0 -40px;
  h3 {
    font-size: 18px;
    text-transform: uppercase;
    color: var(--main);
    letter-spacing: 2px;
    font-weight: 600;
  }
  h2 {
    font-size: 42px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.3em;
    letter-spacing: 1px;
    color: var(--title);
    margin: 1rem 0;
  }
  p {
    margin-bottom: 2rem;
  }
`;

export const CounterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 60px;
`;

export const Counter = styled.div`
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