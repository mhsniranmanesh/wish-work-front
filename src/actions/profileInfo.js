import profileInfoApi from '../api/profile_detail.js';
import * as types from './actionTypes.js';
import axios from 'axios';

export function loadProfileInfoSuccess(profileInfo){
  return{type: types.LOAD_INFO_SUCCESS , profileInfo}
}

// export function projectSubmitLocalForDashboard(NewPSLFD) {
//     return {type: types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD , NewPSLFD}
// }

//
// export function profileInfo(){
//   return function(dispatch){
//     return profileInfoApi.getAllInfo().then(profileInfo =>{
//       dispatch(loadProfileInfoSuccess(profileInfo));
//     }).catch(error =>{
//       throw (error);
//     });
//   };
// }

// export function projectSubmitLocalForDashboard2(PSD2) {
//     return {type: types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD , PSD2}
// }



export function loadNewInfosSuccess(profileInfo){
    return{type: types.UPDATE_NEW_INFOS_SUCCESS , profileInfo}
}

export function profileInfo(){
  return function(dispatch){
    return axios.get('/api/v1/profiles/initial/').then(
        response =>{
      dispatch(loadProfileInfoSuccess(response.data));
    }).catch(error =>{
      throw (error);
    });
  };
}
//
export function updateInformations(profileInfo , getState){
    return function (dispatch) {
        return axios.post('/api/v1/profiles/update-infos/' , profileInfo).then(profileInfo =>{
        dispatch(loadNewInfosSuccess(profileInfo.data));
        }).catch(error => {
            throw (error);
        })
    }
}

//TODO for profile information , change it in store (I don't know how!) and also axios to server
//TODO localStorage for get token and return username of user for axios
