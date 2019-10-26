import POST_SMURF_START from '../actions/postSmurf';
import POST_SMURF_SUCCESS from '../actions/postSmurf';
import POST_SMURF_ERROR from '../actions/postSmurf';

const initialState = {
    smurf: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case POST_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case POST_SMURF_SUCCESS:
            console.log(action.payload, "payload")
            return {
                ...state,
                smurf: [...state.smurf, action.payload],
                isLoading: false
            }
        case POST_SMURF_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}