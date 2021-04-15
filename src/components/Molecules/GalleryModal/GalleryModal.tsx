import React, { useEffect, useState } from 'react';
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

function toggleItem(closeModal) {
  return {
    type: 'REMOVE_MODAL',
    closeModal
  };
}


const GalleryModal = ({ modalId, gallery, dispatch }) => {
  const [position, setPosition] = useState<number>(0);
  const closeModal = false;

  const totalImgs = gallery.length;

  useEffect(() => {
    if(modalId) {
      setPosition(modalId - 1)
    }
  },[modalId])

  const nextImg = () => {
    if(position === totalImgs - 1) {
      setPosition(0)
    } else {
      setPosition( position + 1)
    }
  }

  const prevImg = () => {
    if(position === 0) {
      setPosition(totalImgs - 1)
    } else {
      setPosition( position - 1)
    }
  }

  console.log(position);
  return (
    <> 
      {modalId && 
          <Container key={gallery[position].id}>
            <Content>
              <CloseIcon onClick={() => dispatch(toggleItem(closeModal))} />
              <ModalImage src={gallery[position].image} />
              <Arrows>
                <LeftArrow onClick={prevImg} />
                <RightArrow onClick={nextImg} />
              </Arrows>
            </Content>
          </Container>
      }
    </>
  )
}

export default connect(state => ({
  modalId: state.modalId,
  gallery: state.gallery
}))(GalleryModal);