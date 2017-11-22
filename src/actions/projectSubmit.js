import profileSubmitApi from '../api/profile_detail.js';
import * as types from './actionTypes.js';
import axios from 'axios'

export function submitProjectSuccess(projectSubmit){
    return{type: types.SUBMIT_PROJECT_SUCCESS , projectSubmit}
}

export function projectSubmit(projectSubmit){
    return function(dispatch){
        return axios.post('/api/v1/projects/submit/translation/' , projectSubmit).then(projectSubmit =>{
            dispatch(submitProjectSuccess(projectSubmit));
        }).catch(error =>{
            throw (error);
        });
    };
}
