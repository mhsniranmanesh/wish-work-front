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

export function attachFileToProject(id,stateForFile) {
    return function (dispatch) {
        var fileFormData = new FormData();
        console.log('Project_id:', id.data.id);
        console.log('Project File:', stateForFile.file );
        fileFormData.append('project_id', id.data.id);
        fileFormData.append('file', stateForFile.file);
        return axios.post('/api/v1/projects/files/' , fileFormData ,
          {
            headers: { 'Content-Type': 'multipart/form-data'}
          }).then(
            () =>{
                dispatch(profileInfo());
            }).catch(err =>{
                console.log(err);
        })
    }
}
export function deleteProject(id) {
    console.log(id , 'id');
    return function (dispatch) {
        return axios.delete('/api/v1/projects/delete/', {data: {project_id : id}}).then(
            success =>{
                dispatch(profileInfo());
            }).catch(err => {
                console.log(err)
        })
    }
}
export function projectSubmit(projectSubmit , stateForFile){
    return function(dispatch){
        return  axios.post('/api/v1/projects/submit/translation/' , projectSubmit).then(
                // console.log(projectSubmit);
                x =>{
                dispatch(attachFileToProject(x , stateForFile));
            // console.log(projectSubmit);
        }).catch(error =>{
            throw (error);
        });
    };
}
