import React from 'react';
import ProjectCard from '../../Molecules/ProjectCard/ProjectCard';
import { Container, Texts, Titles, Portfolio } from './styles';
import { connect } from 'react-redux';

function toggleItem(element) {
  return {
    type: 'SET_MODAL',
    element
  };
}

const Projects = ({ gallery, dispatch }) => {

   return (
    <Container>
      <Texts>
        <Titles>
          <h2>Últimos projetos</h2>
          <h3>PORTFOLIO</h3>
        </Titles>
        <p>Conheça nossos últimos projetos.</p>
      </Texts>
      <Portfolio>
        {gallery.map((element, idx) => (
            <ProjectCard 
              key={idx}
              title={element.title}
              text={element.text}
              image={element.image}
              onclick={() => dispatch(toggleItem(element))}
            />
          )
        )}
      </Portfolio>
    </Container>
  )
}


export default connect(state => ({ gallery : state.gallery }))(Projects);