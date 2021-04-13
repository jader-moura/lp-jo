import React from 'react';
import { 
  Container, 
  Content, 
  CloseIcon, 
  ModalImage, 
  Arrows, 
  LeftArrow, 
  RightArrow 
} from './styles';
import { connect } from 'react-redux';

// import { bindActionCreators } from 'redux';
// import { nextImage, prevImage } from '../../../store/Gallery/actions/Gallery.actions'

const GalleryModal = ({ modal, item }) => {

  // function mapStateToProps(state){
  //   return {
  //     id: state.id
  //   };
  // }

  // function matchDispatchToProps(dispatch){
  //   return bindActionCreators({nextImage: nextImage, prevImage: prevImage}, dispatch)
  // };

  return (
    <>
      {modal && 
          <Container key={item.id}>
            <Content>
              <CloseIcon />
              <ModalImage src={item.image} />
              <Arrows>
                <LeftArrow />
                <RightArrow />
              </Arrows>
            </Content>
          </Container>
      }
      {/* {modal &&  
      <div>
        <p>modal: {modal}</p>
        <p>src: {item.image}</p>
        <p>id: {item.id}</p>
      </div>
      } */}
    </>
  )
}

const mapStateToProps = state => ({
  item: state.activeModal.item,
  modal: state.activeModal.modal
});

export default connect (mapStateToProps)(GalleryModal);