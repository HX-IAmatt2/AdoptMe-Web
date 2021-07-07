
export const setLayer = (layer, content) => {
    return {
        type: 'SET_LAYER', 
        payload: {
            layer: layer,
            content: content
        }
    }
};

export const addPet = (pet) => {
    return {
        type: 'ADOPT_PET',
        payload: pet
    }
}

export const removePet = (id) => {
    return {
        type: 'REMOVE_PET',
        payload: id
    }   
}

