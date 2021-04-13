import styled from 'styled-components';

import { PencilRuler2 } from '@styled-icons/remix-line/PencilRuler2';
import { Chair } from '@styled-icons/material-outlined/Chair';
import { Plant } from '@styled-icons/remix-line/Plant';
import { HouseSiding } from '@styled-icons/material-rounded/HouseSiding';
import { CameraOutline } from '@styled-icons/evaicons-outline/CameraOutline';


interface props {
  image: string;
}

export const Container = styled.div<props>`
  background-color: var(--white);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  max-width: 32%;
  margin-bottom: 2rem;
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
    background-image: url(${(props) => props.image});
    box-shadow:inset 0 0 0 2000px #00000099;
    background-repeat: no-repeat center; 
    background-size: cover;
    h3, p {
      color: var(--white);
    }
    svg {
      color: var(--white);
    }
  }
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
