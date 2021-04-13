export const toggleItem = (item) => {
  return {
    type: 'TOGGLE_ITEM',
    payload: {
      item: item,
      modal: true
    }
  }
};

export const nextImage = id => {
  return {
    type: 'NEXT_IMAGE_CLICKED',
    payload: {
      id: id
    }
  };
};


export const prevImage = id => {
  return {
    type: 'PREV_IMAGE_CLICKED',
    payload: {
      id: id
    }
  };
};

