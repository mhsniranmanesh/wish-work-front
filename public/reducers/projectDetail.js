import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function projectDetail(state= initialState.projectDetail , action) {
    switch (action.type) {
        case types.LOAD_PROJECT_DETAIL_SUCCESS:
            return action.ProjectDetail.data;
        default :
            return state;
    }
}