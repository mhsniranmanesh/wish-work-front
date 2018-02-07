import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function payLink(state =initialState.payLink , action){
    switch(action.type){
        case types.Get_PAYMENT_LINK_SUCCESS:
            return  action.url;
        default:
            return state ;
    }
}