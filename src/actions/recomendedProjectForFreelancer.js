import * as types from './actionTypes';
import recomendedProjectApi from '../api/recomendedproject.js';

export function loadRecomendedProjectSuccess(recomendedProject){
  return{type: types.LOAD_RECOMENDED_PROJECT_SUCCESS , recomendedProject}
}

export function recomendedProject(){
  return function(dispatch){
    return recomendedProjectApi.getAllInfo().then(recomendedProject =>{
      dispatch(loadRecomendedProjectSuccess(recomendedProject));
    }).catch(error =>{
      throw (error);
    });
  };
}
