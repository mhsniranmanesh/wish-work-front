import * as types from '../actions/actionTypes';
import initialState from "./initialState";
import {LOAD_PROJECTS_DONE_SUCCESS} from "../actions/actionTypes";

export default function ProjectsDone(state=initialState.ProjectsDone , action) {
    switch (action.type){
        case LOAD_PROJECTS_DONE_SUCCESS :
            return action.ProjectsDone;
        default:
            return state;
    }
}