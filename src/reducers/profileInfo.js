import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function profileInfo(state= initialState.profileInfo , action){
  switch (action.type) {
      case types.LOAD_INFO_SUCCESS:
        return [...state , Object.assign({} , action.profileInfo)];
        //it update profileInfo to new information
      case types.UPDATE_NEW_INFOS_SUCCESS:
          debugger;
          return  [...state , Object.assign({} , state[0] , action.profileInfo)];
      case types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD:
          return [...state , Object.assign({}, action.PSD)];
      case types.UPDATE_NEW_SKILLS_IN_INFOS_SUCCESS :
          debugger;
          var translation_skill = action.profileSkills;
          var skills = {
              0 : translation_skill
          };
           return [...state , Object.assign({} ,state[0], skills)];
      // case types.SUBMIT_PROJECT_SUCCESS:
      //     return [...state , Object.assign({} , state , action.projectSubmit)];
    default:
        return state;
  }
}

