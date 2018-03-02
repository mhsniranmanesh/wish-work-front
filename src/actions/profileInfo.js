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
export function loadNewSkillsSuccess(profileSkills) {
    // var prObj = {profileSkills};
    // console.log(prObj);
    debugger;
    return{type: types.UPDATE_NEW_SKILLS_IN_INFOS_SUCCESS , payload:profileSkills}
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
export function updateSkills(profileSkills) {
    return function (dispatch) {
        return axios.post('/api/v1/skills/add/translation/' , profileSkills).then(profileskills =>{
            dispatch(profileInfo())
        }).catch(error =>{
            throw (error);
        })
    }
}
//
export function updateInformations(sendData) {
    return function (dispatch) {

        return axios.post('/api/v1/profiles/update-infos/' , sendData).then(profileInfo =>{
            dispatch(loadNewInfosSuccess(profileInfo.data));
        }).catch(error => {
            throw (error);
        })
    }
}
export function cashOut(amount , account) {
    console.log(amount , 'amount');
    var x = {
        amount:Number(amount),
        account_number:account
    };
    console.log(x , 'xxxx');
    return function (dispatch) {
        return axios.post('/api/v1/accounts/transaction/cashout/' , x).then(
            dispatch(profileInfo())
        ).catch(error =>{
            throw (error)
        })
    }
}
export function getPortSuccess(url) {
    return {type: types.Get_PAYMENT_LINK_SUCCESS, url}
}
export function transActionPerform(price) {
    var priceJson = {amount : price,
                     port : 1};
    return function (dispatch){
        return axios.post('/api/v1/accounts/transaction/perform/' , priceJson).then(payment_url =>{
            dispatch(getPortSuccess(payment_url.data))
        }).catch(err => {
            throw (err);
            })
    }
}
export function updateInformationsPic(profileinfo , getState){
    return function (dispatch) {
        var profileData = new FormData();
      console.log('profile_picture:', profileinfo.profile_picture);
        profileData.append('profile_picture', profileinfo.profile_picture);

      return axios.post('/api/v1/profiles/update-infos/' , profileData,
        {
          headers: { 'Content-Type': 'multipart/form-data'}
        }
        ).then(() =>{
        dispatch(profileInfo());
        }).catch(error => {
            throw (error);
        })
    }
}

//TODO for profile information , change it in store (I don't know how!) and also axios to server
//TODO localStorage for get token and return username of user for axios
