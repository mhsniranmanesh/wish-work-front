import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function Notifications(state= initialState.Notifications , action){
    switch (action.type) {
        case types.LOAD_NOTIF_SUCCESS:
            return action.Notifications;
        default:
            return state;
    }
}
