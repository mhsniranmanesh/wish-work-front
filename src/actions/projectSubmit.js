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
function routeActions() {

}
export function profileInfo(){
    return function(dispatch){
        return axios.get('/api/v1/profiles/initial/').then(
            response =>{
                dispatch(loadNewInfosSuccess(response.data));
            } , dispatch({type:'urlChange', url:'/some/url'})).catch(error =>{
            throw (error);
        });
    };
}

// export function attachFileToProject(id,stateForFile) {
//     return function (dispatch) {
//         var fileFormData = new FormData();
//         console.log('Project_id:', id.data.id);
//         console.log('Project File:', stateForFile.file );
//         fileFormData.append('project_id', id.data.id);
//         fileFormData.append('file', stateForFile.file);
//         return axios.post('/api/v1/projects/files/' , fileFormData ,
//           {
//             headers: { 'Content-Type': 'multipart/form-data'}
//           }).then(
//             () =>{
//                 dispatch(profileInfo());
//             }).catch(err =>{
//                 console.log(err);
//         })
//     }
// }
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
export function projectSubmit(projectSubmit , File){
    var fileFormData = new FormData();
    console.log('projectSubmit' , projectSubmit);
    console.log('Project File:', File );
    fileFormData.append('from_language' ,projectSubmit.from_language);
    fileFormData.append('to_language' ,projectSubmit.to_language );
    fileFormData.append('description', projectSubmit.description);
    fileFormData.append('time_limit' , projectSubmit.time_limit);
    fileFormData.append('bid_duration' , projectSubmit.bid_duration);
    fileFormData.append('number_of_pages' , projectSubmit.number_of_pages);
    fileFormData.append('budget' , projectSubmit.budget);
    fileFormData.append('file', File.file);
    fileFormData.append('title' , projectSubmit.title);
    fileFormData.append('type' , projectSubmit.type);
    fileFormData.append('field' , projectSubmit.field);
    fileFormData.append('category' , projectSubmit.category);
    return function(dispatch){
        return  axios.post('/api/v1/projects/submit/translation/' , fileFormData).then(
                // console.log(projectSubmit);
            () =>{
                dispatch(profileInfo());
            // console.log(projectSubmit);
        }).catch(error =>{
            throw (error);
        });
    };
}
