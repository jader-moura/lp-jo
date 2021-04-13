import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4rem;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
`;

export const Texts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    max-width: 420px;
  }
  `;

export const Titles = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 2rem 0;
  h2 {
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 600;
    color: var(--title);
    z-index: 2;
  }
  h3 {
    text-shadow: 0px 0px 2px var(--title);
    font-size: 100px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--white);
    position: absolute;
    top: 0;
    transform: translateY(-40%);

  }
  @media(max-width: 765px) {
    h3 {
      font-size: 60px;
      transform: translateY(-30%);
      text-shadow: 0px 0px 1px var(--title);
    }
    h2 {
      font-size: 24px;
    }
  }
`;

export const Portfolio = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;