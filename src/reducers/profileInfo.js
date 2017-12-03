import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function profileInfo(state= initialState.profileInfo , action){
  switch (action.type) {
    case types.LOAD_INFO_SUCCESS:
        return action.profileInfo;
        //it update profileInfo to new information
      case types.UPDATE_NEW_INFOS_SUCCESS:
          return [...state , Object.assign({}, action.updateInformations)];
      case types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD:
          return [...state , Object.assign( action.PSD)];
    default:
        return state;
  }
}

