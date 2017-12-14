import * as types from './actionTypes';
import ProjectsDoneApi from '../api/freelancerprojectsdone';

export function loadProjectsDoneSuccess(ProjectsDone) {
    return{type: types.LOAD_PROJECTS_DONE_SUCCESS , ProjectsDone}
}


//class ProjectsDoneApi {
export function ProjectsDone(){
    return function(dispatch){
        return ProjectsDoneApi.getAllInfo().then(ProjectsDone =>{
            dispatch(loadProjectsDoneSuccess(ProjectsDone));
        }).catch(error =>{
            throw (error);
        });
    };
}