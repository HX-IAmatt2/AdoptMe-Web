

const initialState = {
        windowLayer0: 'hola',
        windowLayer1: 'chau',
        inventario: [],
        egg: {},
        pet: {},
    };
  
  
export default function windowReducer(state = initialState, action) {

    switch(action.type) {

        case 'CLEAR_WINDOW': 
            if (action.payload === 0) return {...state, windowLayer0:''}
            if (action.payload === 1) return {...state, windowLayer1:''}
            break;

        case 'newEgg':
            return {...state, windowLayer0: 'newEgg'};

        default: return state;
    
    };

}