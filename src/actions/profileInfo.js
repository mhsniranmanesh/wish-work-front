import profileInfoApi from '../api/profile_detail.js';
import * as types from './actionTypes.js';

export function loadProfileInfoSuccess(profileInfo){
  return{type: types.LOAD_INFO_SUCCESS , profileInfo}
}

export function profileInfo(){
  return function(dispatch){
    return profileInfoApi.getAllInfo().then(profileInfo =>{
      dispatch(loadProfileInfoSuccess(profileInfo));
    }).catch(error =>{
      throw (error);
    });
  };
}
