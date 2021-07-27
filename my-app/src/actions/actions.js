let petID = 1

export const setLayer = (layer, content) => {
  return {
    type: 'SET_LAYER',
    payload: {
      layer: layer,
      content: content
    }
  }
}

export const setLogged = (name, gender, newCondition) => {
  return {
    type: 'SET_LOGGED',
    payload: {
      name,
      gender,
      newCondition
    }
  }
}

export const setNewFalse = () => {
  return {
    type: 'SET_NEW_FALSE'

  }
}

export const addPet = (pet) => {
  return {
    type: 'ADD_PET',
    payload: {
      ...pet,
      id: petID++
    }
  }
}

export const removePet = (id) => {
  return {
    type: 'REMOVE_PET',
    payload: id
  }
}

export const setEgg = (egg) => {
  return {
    type: 'SET_EGG',
    payload: egg
  }
}

export const setPet = (pet) => {
  return {
    type: 'SET_PET',
    payload: pet
  }
}

export const renamePet = (name) => {
  return {
    type: 'RENAME_PET',
    payload: name
  }
}
