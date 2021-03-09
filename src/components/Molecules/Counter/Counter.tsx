import React, { useEffect, useState } from 'react';
import { Container } from './styles';

interface props {
  countTotal: number;
  countText: string;
}

const Counter = ({ countTotal, countText }: props) => {
  let countdownTimeout: NodeJS.Timeout;

  const [projectsCount, setProjectsCount] = useState(0);

  function countPlus() {
    setProjectsCount(projectsCount + 1)
  }
  
  useEffect(() => {
    if (projectsCount < countTotal) {
      countdownTimeout = setTimeout(() => {
        countPlus();
      }, 100);
    }
  }, [projectsCount])

  return (
    <Container>
      <h4>{projectsCount}</h4>
      <h5>{countText}</h5>
    </Container>
  )
}

export default Counter;