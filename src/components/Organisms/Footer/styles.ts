import styled from 'styled-components';
import { FacebookWithCircle } from '@styled-icons/entypo-social/FacebookWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';

export const Container = styled.div`
  background-color: var(--white);
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 1.5rem 0;
  width: 100%;
  align-self: center;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 100px;
  }
`;

export const IconContent = styled.section`
  display: flex;
  padding-bottom: 1rem;
`;

export const FacebookIcon = styled(FacebookWithCircle)`
  width: 34px;
  height: 34px;
  color: var(--title);
  margin: 1rem;
  :hover {
    color: var(--main);
  }
`;

export const InstagramIcon = styled(InstagramWithCircle)`
  width: 34px;
  height: 34px;
  color: var(--title);
  margin: 1rem;
  :hover {
    color: var(--main);
  }
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  width: 34px;
  height: 34px;
  color: var(--title);
  margin: 1rem;
  :hover {
    color: var(--main);
  }
`;

export const CopyText = styled.article`
  display: flex;
  flex: 1;
  min-width: 100%;
  justify-content: space-between;
  border-top: 1px solid #e7e7e7;
  padding-top: 1.5rem;
`;