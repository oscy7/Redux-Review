import { LOADING, SUCCESS } from "./action"


//STEP 1: 
const initialState = {
    data: {},
    loading: false,
    error: ''
}

//STEP 2:
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING: 
            return {
                ...state,
                loading: true,
        }
        case SUCCESS: 
            return {
                ...state, 
                loading: false,
                data: action.payload //THIS IS POINTING TO PAYLOAD IN DISPATCH IN AXIOS REDUCER
            }
        default: 
            return state
    }
}
 