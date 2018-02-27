import * as types from './actionTypes.js';
import axios from 'axios';

// func for ?c project

export function loadProfileInfoSuccess(profileInfo){
    return{type: types.LOAD_INFO_SUCCESS , profileInfo}
}
// export function uploadAttachmentForMileStoneSuccess(profileInfo){
//     return{type: types.UPDATE_NEW_INFOS_SUCCESS , profileInfo}
// }
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

export function sendFeedBack(send) {
    return function (dispatch) {
        return axios.post('/api/v1/projects/milestone/revise/' , send).then(
            ()=>{
                dispatch(profileInfo());
            }
        ).catch(err =>{
            throw (err);
        });
    }
}
export function cancelProject(id) {
    var pId = {project_id : id};
    return function (dispatch) {
        return axios.post('/api/v1/projects/cancel/' , pId).then(
            ()=>{
                dispatch(profileInfo());
            }
        ).catch(err =>{
            throw (err);
        });
    }
}
export function nextMileStoneBegin(id) {
    return function (dispatch) {
        var ids = {milestone_id : id};
        return axios.post('/api/v1/projects/milestone/download/' , ids).then(() =>{
            dispatch(profileInfo())
        }).catch(err =>{
            throw (err)
        })
    }
}
export function sendUploadedFileByFreelancerAction(sendData) {
    return function (dispatch) {
        var fileData = new FormData();
        console.log('profile_picture:', sendData.file);
        console.log('id' ,sendData.milestone_id );
        fileData.append('file', sendData.file);
        fileData.append('milestone_id' , sendData.milestone_id);
        return axios.post('/api/v1/projects/milestone/upload/' , fileData,
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