import profileInfoApi from '../api/profile_detail.js';
import * as types from './actionTypes.js';
import axios from 'axios';

export function loadProfileInfoSuccess(profileInfo){
  return{type: types.LOAD_INFO_SUCCESS , profileInfo}
}


//
export function profileInfo(){
  return function(dispatch){
    return profileInfoApi.getAllInfo().then(profileInfo =>{
      dispatch(loadProfileInfoSuccess(profileInfo));
    }).catch(error =>{
      throw (error);
    });
  };
}

export function loadNewInfosSuccess(newInfos){
    return{type: types.UPDATE_NEW_INFOS_SUCCESS , newInfos}
}

// export function profileInfo(){
//   return function(dispatch){
//     console.log('axios is' , axios.defaults.headers.common['Authorization'])
//     return axios.get('/api/v1/profiles/initial/').then(
//         response =>{
//           console.log(response);
//       dispatch(loadProfileInfoSuccess(response.data));
//     }).catch(error =>{
//       throw (error);
//     });
//   };
// }
//
// export function updateInformations(newInfos , getState){
//     return function (dispatch) {
//         return axios.post('/apiv1/profiles/lublublub').then(newInfos =>{
//         dispatch(loadNewInfosSuccess(newInfos));
//         }).catch(error => {
//             throw (error);
//         })
//     }
// }

//TODO for profile information , change it in store (I don't know how!) and also axios to server
//TODO localStorage for get token and return username of user for axios
