import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recomendedProject (state = initialState.recomendedProject , action) {
    switch(action.type){
        case types.LOAD_RECOMENDED_PROJECT_SUCCESS:
            return action.recomendedProject;

    default:
        return state ;
    }
}

