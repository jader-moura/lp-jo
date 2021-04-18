import { createStore } from 'redux';

const INITIAL_STATE = {
  modalId: null,
  gallery : [
    {
      id: 1,
      title: "Suíte com escritório",
      image: "/ambient-10.jpg",
    },
    {
      id: 2,
      title: "Área gourmet",
      image: "/ambient-12.jpg",
    },
    {
      id: 3,
      title: "Coworking",
      image: "/ambient-14.jpg", 
    },
    {
      id: 4,
      title: "Cozinha granito marfim white",
      image: "/ambient-15.jpg",
    },
    {
      id: 5,
      title: "Fachada frontal",
      image: "/ambient-16.jpg",
    },
    {
      id: 6,
      title: "Fachada frontal",
      image: "/ambient-17.jpg",
    },
    {
      id: 7,
      title: "Fachada frontal",
      image: "/ambient-18.jpg",
    },
    {
      id: 8,
      title: "Escritório de engenharia",
      image: "/ambient-19.jpeg"
    },
    {
      id: 9,
      title: "Fachada frontal container",
      image: "/ambient-20.jpg",
    },
    {
      id: 10,
      title: "Corredor",
      image: "/ambient-13.jpg",
    },
    {
      id: 11,
      title: "Quarto de hospedes",
      image: "/ambient-22.jpg",
    },
    {
      id: 11,
      title: "Administração",
      image: "/ambient-23.jpg",
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