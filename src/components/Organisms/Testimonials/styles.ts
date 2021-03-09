import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white);
  padding-top: 2rem;
  margin-bottom: -4rem;
  display: flex;

  img {
    min-width: 50%;
    height: 430px;
    object-fit: cover;
  }
`;

export const TestimonialContent = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 45%;
  padding: 0 4rem;
  h2 {
    text-transform: uppercase;
    color: var(--title);
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 1rem;
  }
  p {
    width: 60%;
  }
`;
