import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function projectSubmit(state=initialState.projectOfMine , action){
    switch(action.type){
        case types.SUBMIT_PROJECT_SUCCESS:
            return [...state , Object.assign({} , action.projectSubmit)];
        default:
            return state ;
    }
}