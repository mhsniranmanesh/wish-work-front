import * as types from './actionTypes';
import axios from 'axios';

export function loadProjectDetailSuccess(ProjectDetail) {
    return{type: types.LOAD_PROJECT_DETAIL_SUCCESS , ProjectDetail}
}

export function addBidSuccess(addedBid) {
    return{type: types.ADD_BID_SUCCESS , addedBid}
}


export function addBidToProject(getState) {
    return function (dispatch) {
        console.log('getState' , getState);
        return axios.post('/api/v1/projects/translation/bid/' , getState).then(addedBid =>{
            dispatch(addBidSuccess(addedBid))
        }).catch(error =>{
            throw (error)
        })
    }
}

export function projectDetail(getState){
    return function(dispatch){
        //console.log('getState' ,getState);
        const slug =  getState + '/' ;
        console.log('/api/v1/projects/get/' + slug);
        return axios.get('/api/v1/projects/get/' + slug).then(ProjectDetail =>{
            dispatch(loadProjectDetailSuccess(ProjectDetail))
        })
    };
}