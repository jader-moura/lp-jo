import styled from 'styled-components';

export const WhiteCorretor = styled.div`
  background-color: var(--white);
  margin-top: -2rem;
  z-index: 1;

`;

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  img {
    max-width: 500px;
    object-fit: contain;
  }
  section {
    display: flex;
    flex-direction: column;
    margin-right: 80px;
  }
  @media(max-width: 1100px) {
    img {
      max-width: 400px;
    }
    section {
      margin-right: 0px;
    }
  }
  @media(max-width: 830px) {
    flex-wrap: wrap;
    img {
      min-width: 85%;
      margin-right: 15%;
    }
    section {
      max-width: 100%;
      margin-left: 20%;
      margin-top: -40%;
    }
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
    font-size: 38px;
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

  @media(max-width: 830px) {
    padding: 30px 30px 60px 30px ;
    margin: 30px 0  0 -40px;
    h2 {
      font-size: 22px;
    }
  }
`;

export const CounterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 60px;
  @media(max-width: 830px) {
    padding: 30px;
  }
`;

