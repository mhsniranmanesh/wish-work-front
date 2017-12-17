import * as types from './actionTypes';
import axios from 'axios';

export function loadfreelancerDetailSuccess(freelancerDetail) {
    return{type: types.LOAD_FREELANCER_DETAIL_SUCCESS , freelancerDetail}
}


export function freelancerDetail(getState){
    return function(dispatch){
        console.log('getState' ,getState);
        const slug =  getState + '/' ;
        console.log('/api/v1/projects/get/' + slug);
        return axios.get('/api/v1/projects/get/' + slug).then(freelancerDetail =>{
            dispatch(loadfreelancerDetailSuccess(freelancerDetail))
        })
    };
}