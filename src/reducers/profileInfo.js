import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function profileInfo(state= initialState.profileInfo , action){
  switch (action.type) {
    case types.LOAD_INFO_SUCCESS:
        return action.profileInfo;
    default:
        return state;
  }
}
