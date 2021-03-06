import axios from 'axios';
import { apiBaseURl, apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

export default FetchCoinData = ( ) => {
    return async dispatch => {
        dispatch( { type: FETCHING_COIN_DATA } )
        try {
            let data = await axios.get( `${ apiBaseURL }/v1/ticker/?limit=10` )
            
            dispatch( { type: FETCHING_COIN_DATA_SUCCESS, payload: data.data } )
        } catch ( err ) {
            dispatch( { type: FETCHING_COIN_DATA_FAIL, payload: err.data } )
        } 
    }
}
// export default function FetchCoinData() {
//     return dispatch => {

//         dispatch( { type: FETCHING_COIN_DATA } )

//         return axios.get( `${ apiBaseURL }/v1/ticker/?limit=10` )
//             .then(res => {
//                 dispatch( { type: FETCHING_COIN_DATA_SUCCESS, payload: res.data } )
//             })
//             .catch(err =>{
//                 dispaych({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
//             });
//     }
// }