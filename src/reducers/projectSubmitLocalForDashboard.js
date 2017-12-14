import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PSD(state =initialState.PSD , action){
    switch(action.type){
        case types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD:
            return  action.PSD;
        default:
            return state ;
    }
}