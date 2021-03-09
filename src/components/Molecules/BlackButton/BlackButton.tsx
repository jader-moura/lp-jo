import React from 'react';
import { Button } from './styles';

interface props {
  href: string;
  text: string;
  type: string;
}

const BlackButton = ({ href, text, type }: props) => {
  return (
    <Button href={href} type={type}>
      {text}
    </Button>
  )
}

export default BlackButton;