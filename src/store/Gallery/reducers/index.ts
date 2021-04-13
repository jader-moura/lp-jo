import { combineReducers } from 'redux';
import galleryReducer from './Gallery.reducer';
import modalReducer from './Modal.reducer'

const rootReducer = combineReducers({
  data : galleryReducer,
  activeModal: modalReducer
})

export default rootReducer