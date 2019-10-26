import { FETCH_SMURF_START } from '../actions/fetchSmurfs';
import { FETCH_SMURF_SUCCESS } from '../actions/fetchSmurfs';
import { FETCH_SMURF_ERROR } from '../actions/fetchSmurfs';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: null
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}