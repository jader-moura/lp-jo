import styled from 'styled-components';

import { PencilRuler2 } from '@styled-icons/remix-line/PencilRuler2';
import { Chair } from '@styled-icons/material-outlined/Chair';
import { Plant } from '@styled-icons/remix-line/Plant';
import { HouseSiding } from '@styled-icons/material-rounded/HouseSiding';
import { CameraOutline } from '@styled-icons/evaicons-outline/CameraOutline';


export const Container = styled.div`
  background-color: var(--white);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  max-width: 32%;
  margin-bottom: 2rem;
  position: relative;
  svg {
    color: var(--main);
    transition: .3s ease-in;
    width: 2rem;
  }
  p {
    transition: .3s ease-in;
  }
  h3 { 
    transition: .3s ease-in;
    font-size: 1.5rem;
    color: var(--title);
    font-weight: 600;
    margin: 1rem 0;
  }
  :hover {
    h3, p {
      color: var(--white);
    }
    svg {
      color: var(--white);
    }
  }

  @media(max-width: 901px) {
    max-width: 49%;
  }

  @media(max-width: 678px) {
    min-width: 99%;
  }

  img {
    filter:  contrast(120%) brightness(30%);
  animation: fade .2s;
  
  @keyframes fade {
      0% { 
        opacity: 0;
      }
      100% { 
        opacity: 1;
      }
    }
  }
`;

export const Content = styled.section`
  z-index: 2;
`;

export const PencilIcon = styled(PencilRuler2)`
`;
export const ChairIcon = styled(Chair)`
`;
export const PlantIcon = styled(Plant)`
`;
export const HouseIcon = styled(HouseSiding)`
`;
export const CameraIcon = styled(CameraOutline)`
`;