import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

function size (obj) {
    let x = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) x++;
    }
    return x;
}

export default function profileInfo(state= initialState.profileInfo , action){
  switch (action.type) {
      case types.LOAD_INFO_SUCCESS:
        return [...state , Object.assign({} , action.profileInfo)];
        //it update profileInfo to new information
      case types.UPDATE_NEW_INFOS_SUCCESS:
          debugger;
          var size1 = size(state);
          return  [...state , Object.assign({} , state[size1 - 1] , action.profileInfo)];
      case types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD:
          return [...state , Object.assign({}, action.PSD)];
      case types.UPDATE_NEW_SKILLS_IN_INFOS_SUCCESS :
          debugger;
          var size2 = size(state);
          var translation_skill = action.profileSkills;
          var translation_skills = {translation_skill};
          var skills ={
              0: translation_skills ,
              length: 1
          };
          skills[0] = translation_skills;
          console.log(skills , 'skills');
           return [...state , Object.assign({} ,state[size2 - 1].skills, skills)];
      // case types.SUBMIT_PROJECT_SUCCESS:
      //     return [...state , Object.assign({} , state , action.projectSubmit)];
    default:
        return state;
  }
}

