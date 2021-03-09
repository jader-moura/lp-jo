import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--gray-back);
  padding: 2.5rem 0;
`;
export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TextContent = styled.article`
  text-align: left;
  max-width: 32%;
  h2 {
    color: var(--title);
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;