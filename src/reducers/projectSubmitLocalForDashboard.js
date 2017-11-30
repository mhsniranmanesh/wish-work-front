import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PSLFD(state=initialState.localProjectForDash , action){
    switch(action.type){
        case types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD:
            return  action.PSLFD;
        default:
            return state ;
    }
}