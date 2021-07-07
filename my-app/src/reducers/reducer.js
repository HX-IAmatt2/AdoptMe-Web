const initialState = {
  layer0: '',
  layer1: '',
  inventario: [],
};

export default function windowReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_LAYER':
      if (action.payload.layer === 0) return { ...state, layer0: action.payload.content };
      if (action.payload.layer === 1) return { ...state, layer1: action.payload.content };
      break;

    case 'ADOPT_PET':
      return { ...state, inventario: state.inventario.concat(action.payload) };

    case 'REMOVE_PET':
      return {
        ...state,
        inventario: state.inventario.filter((pet) => pet.id !== action.payload),
      };

    default:
      return state;
  }
}
