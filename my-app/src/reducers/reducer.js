const initialState = {
  user: {
    logged: false
  },
  layer0: '',
  layer1: '',
  inventario: [],
  egg: {}
}

const windowReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LAYER':
      if (action.payload.layer === 0) return { ...state, layer0: action.payload.content }
      if (action.payload.layer === 1) return { ...state, layer1: action.payload.content }
      break

    case 'SET_LOGGED':
      return { ...state, user: { logged: true, name: action.payload.name, gender: action.payload.gender, new: action.payload.newCondition } }

    case 'ADD_PET':
      return { ...state, inventario: state.inventario.concat(action.payload) }

    case 'REMOVE_PET':
      return {
        ...state,
        inventario: state.inventario.filter((pet) => pet.id !== action.payload)
      }
    case 'SET_EGG':
      return { ...state, egg: action.payload }

    case 'SET_PET':
      return { ...state, pet: action.payload }

    case 'RENAME_PET': {
      const updatedPet = state.pet
      updatedPet.name = action.payload
      return { ...state, pet: updatedPet }
    }

    default:
      return state
  }
}

export default windowReducer
