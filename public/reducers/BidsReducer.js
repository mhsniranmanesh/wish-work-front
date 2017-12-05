import * as types from '../actions/actionTypes';
import initialState from "./initialState";


export default function Bids(state = initialState.Bids , action){
    switch(action.type){
        case types.LOAD_BIDS_SUCCESS :
            return action.Bids;
        default:
            return state;
    }
}