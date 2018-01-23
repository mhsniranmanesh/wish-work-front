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
    debugger;
    return function (dispatch) {
        var fileFormData = new FormData();
        console.log('Project_id:', id.data.id)
        console.log('Project File:', stateForFile.file )
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

// export function addSkills(id , allState , stateForFile) {
//     return function (dispatch) {
//         //console.log('id:' , id , 'allState:' , allState );
//         allState.project_id = id.data.id;
//         //console.log( allState , ' allState ');
//         return axios.post('/api/v1/projects/submit/translation/' , allState).then(
//             () =>{
//                 dispatch(attachFileToProject(allState , stateForFile));
//             }).catch(error =>{
//             //throw (error);
//             console.log('Fuck error' , error);
//         })
//     }
// }

// export function addDetail(projectSubmit) {
//     return axios.post('/api/v1/projects/translation/add-skills/' , projectSubmit);
// }


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
