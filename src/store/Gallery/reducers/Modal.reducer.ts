
export default function (state = {}, action) {
  console.log(action);
  switch(action.type) {

    case 'TOGGLE_ITEM':
      return action.payload;
      break;
    
    case 'NEXT_IMAGE_CLICKED':
      return {currentImageID: ((action.payload.id+1) > 11 ? 1 : action.payload.id+1)};
      break;

    case 'PREV_IMAGE_CLICKED':
      return {currentImageID: ((action.payload.id-1) < 1 ? 11 : action.payload.id-1)};
      break;
        
      default:
        return state
  }
}