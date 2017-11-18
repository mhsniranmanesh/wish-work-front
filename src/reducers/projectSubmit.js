import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function projectSubmit(state , action){
    switch(action.type){
        case types.SUBMIT_PROJECT_SUCCESS:
            return [...state , Object.assign({} , action.projectSubmit)];
        default:
            return state ;
    }
}