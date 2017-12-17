import * as types from './actionTypes';
import axios from 'axios';

export function loadfreelancerDetailSuccess(freelancerDetail) {
    return{type: types.LOAD_FREELANCER_DETAIL_SUCCESS , freelancerDetail}
}


export function freelancerDetail(getState){
    return function(dispatch){
        console.log('getState' ,getState);
        const username =  getState + '/' ;
        console.log('/api/v1/profiles/get-pub-infos/' + username);
        return axios.get('/api/v1/profiles/get-pub-infos/' + username).then(freelancerDetail =>{
            dispatch(loadfreelancerDetailSuccess(freelancerDetail))
        })
    };
}