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