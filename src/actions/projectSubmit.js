import profileSubmitApi from '../api/profile_detail.js';
import * as types from './actionTypes.js';

export function submitProjectSuccess(projectSubmit){
    return{type: types.SUBMIT_PROJECT_SUCCESS , projectSubmit}
}

export function projectSubmit(){
    return function(dispatch){
        return profileInfoApi.axios('api/project').then(projectSubmit =>{
            dispatch(submitProjectSuccess(projectSubmit));
        }).catch(error =>{
            throw (error);
        });
    };
}
