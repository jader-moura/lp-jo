import React from 'react';
import ProjectCard from '../../Molecules/ProjectCard/ProjectCard';
import { connect } from 'react-redux';
import { Container, Texts, Titles, Portfolio } from './styles';
import * as GalleryActions from '../../../store/Gallery/actions/Gallery.actions';
import { bindActionCreators } from 'redux';

const Projects = ({ gallery, toggleItem }) => {

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
        {gallery.map((element) => (
            <ProjectCard 
              key={element.id}
              title={element.title}
              text={element.text}
              image={element.image}
              onclick={() => toggleItem(element)}
            />
          )
        )}
      </Portfolio>
    </Container>
  )
}

const mapStateToProps = state => ({
  gallery: state.data.gallery
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(GalleryActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Projects);