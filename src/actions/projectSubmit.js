//import profileSubmitApi from '../api/profile_detail.js';
import * as types from './actionTypes.js';
import axios from 'axios'

export function submitProjectSuccess(projectSubmit){
    return{type: types.SUBMIT_PROJECT_SUCCESS , projectSubmit}
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

export function addSkills(id , allState) {
    return function (dispatch) {
        console.log('id:' , id , 'allState:' , allState );
        allState.project_id = id.data.id;
        return axios.post('/api/v1/projects/add-skills/translation/' , allState).then(
            projectAddSkills =>{
                dispatch(submitProjectSuccess(projectAddSkills));
            }).catch(error =>{
            //throw (error);
            console.log('Fuck error' , error)
        })
    }
}

// export function addDetail(projectSubmit) {
//     return axios.post('/api/v1/projects/translation/add-skills/' , projectSubmit);
// }


export function projectSubmit(projectSubmit , getState){
    return function(dispatch){
        return  axios.post('/api/v1/projects/submit/translation/' , projectSubmit).then(
            projectSubmit =>{
                // console.log(projectSubmit);
                dispatch(addSkills(projectSubmit , getState));
            // console.log(projectSubmit);
        }).catch(error =>{
            throw (error);
        });
    };
}

