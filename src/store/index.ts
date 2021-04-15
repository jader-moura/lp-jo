import { createStore } from 'redux';

const INITIAL_STATE = {
  modalId: null,
  gallery : [
    {
      id: 1,
      title: "Comercial Design",
      image: "ambient-1.jpg"
    },
    {
      id: 2,
      title: "Comercial Design",
      image: "ambient-2.jpg"
    },
    {
      id: 3,
      title: "Comercial Design",
      image: "ambient-3.jpg" 
    },
    {
      id: 4,
      title: "Comercial Design",
      image: "ambient-4.jpg"
    },
    {
      id: 5,
      title: "Comercial Design",
      image: "ambient-5.jpg"
    },
    {
      id: 6,
      title: "Comercial Design",
      image: "ambient-6.jpg"
    },
    {
      id: 7,
      title: "Comercial Design",
      image: "ambient-7.jpg"
    },
    {
      id: 8,
      title: "Comercial Design",
      image: "ambient-8.jpg"
    },
    {
      id: 9,
      title: "Comercial Design",
      image: "ambient-9.jpg"
    },
    {
      id: 10,
      title: "Comercial Design",
      image: "ambient-10.jpg"
    },
    {
      id: 11,
      title: "Comercial Design",
      image: "ambient-11.jpg"
    }
  ]
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_MODAL') {
    return {...state, modalId: action.element.id }
  }
  if (action.type === 'REMOVE_MODAL') {
    return {...state, modalId: null }
  }
  return state;
}

const store = createStore(reducer);

export default store;