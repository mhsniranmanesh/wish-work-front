import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function projectSubmit(state=initialState.projectSubmit , action){
    switch(action.type){
        // case types.LOAD_SUBMITTED_PROJECTS_SUCCESS:
        //     return action.submittedProjects;
        case types.SUBMIT_PROJECT_SUCCESS:
            return [...state , Object.assign({} , action.projectSubmit)];
        default:
            return state ;
    }
}