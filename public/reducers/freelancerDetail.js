import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function freelancerDetail(state= initialState.freelancerDetail , action) {
    switch (action.type) {
        case types.LOAD_FREELANCER_DETAIL_SUCCESS:
            return action.freelancerDetail.data;
        default :
            return state;
    }
}