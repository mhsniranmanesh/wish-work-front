import * as types from './actionTypes';
import recomendedProjectApi from '../api/recomendedproject.js';
export function loadRecomendedProjectSuccess(profileInfo){
  return{type: types.LOAD_RECOMENDED_PROJECT_SUCCESS , profileInfo}
}

export function profileInfo(){
  return function(dispatch){
    return recomendedProjectApi.getAllInfo().then(recomendedProject =>{
      dispatch(loadProfileInfoSuccess(profileInfo));
    }).catch(error =>{
      throw (error);
    });
  };
}
