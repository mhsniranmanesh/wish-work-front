import * as types from './actionTypes.js';
import axios from 'axios';


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
export function loadProfileInfoSuccess(profileInfo){
    return{type: types.LOAD_INFO_SUCCESS , profileInfo}
}