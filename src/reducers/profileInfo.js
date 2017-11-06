import * as types from '../actions/actionTypes.js';

export default function profileInfo(state=[] , action){
  switch (action.type) {
    case 'LOAD_INFO_SUCCESS':
        return action.profileInfo;
    default:
        return state;
  }
}
