//import profileSubmitApi from '../api/profile_detail.js';
import * as types from './actionTypes.js';
import axios from 'axios'

// export function submitProjectSuccess(projectSubmit){
//     return{type: types.SUBMIT_PROJECT_SUCCESS , projectSubmit}
// }
export function loadNewInfosSuccess(profileInfo){
    return{type: types.UPDATE_NEW_INFOS_SUCCESS , profileInfo}
}
export function loadSubmittedProjectsSuccess(submittedProjects) {
    return{type : types.LOAD_SUBMITTED_PROJECTS_SUCCESS , submittedProjects}
}

export function getSubmittedProjects() {
    return function (dispatch) {
        return axios.get().then(
            response => {
                (dispatch(loadSubmittedProjectsSuccess));
    }).catch(error =>{
        throw (error);
        });
    };
}
export function profileInfo(){
    return function(dispatch){
        return axios.get('/api/v1/profiles/initial/').then(
            response =>{
                dispatch(loadNewInfosSuccess(response.data));
            }).catch(error =>{
            throw (error);
        });
    };
}
export function addSkills(id , allState) {
    return function (dispatch) {
        console.log('id:' , id , 'allState:' , allState );
        allState.project_id = id.data.id;
        console.log( allState , ' allState ');
        return axios.post('/api/v1/projects/add-details/translation/' , allState).then(
            () =>{
                dispatch(profileInfo());
            }).catch(error =>{
            //throw (error);
            console.log('Fuck error' , error);
        })
    }
}

// export function addDetail(projectSubmit) {
//     return axios.post('/api/v1/projects/translation/add-skills/' , projectSubmit);
// }


export function projectSubmit(projectSubmit , getState){
    return function(dispatch){
        return  axios.post('/api/v1/projects/translation/' , projectSubmit).then(
            projectSubmit =>{
                // console.log(projectSubmit);
                dispatch(addSkills(projectSubmit , getState));
            // console.log(projectSubmit);
        }).catch(error =>{
            throw (error);
        });
    };
}

