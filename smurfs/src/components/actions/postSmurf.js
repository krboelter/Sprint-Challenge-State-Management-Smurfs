import axios from "axios";

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_ERROR = "POST_SMURF_ERROR"

export function postSmurf(smurf) {
    return dispatch => {
        dispatch({ type: POST_SMURF_START });
        console.log(smurf, "Action Smurf")

        axios.post(`http://localhost:3333/smurfs`, smurf)
            .then(res => {
                dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: POST_SMURF_ERROR, payload: err})
            })
    }
}