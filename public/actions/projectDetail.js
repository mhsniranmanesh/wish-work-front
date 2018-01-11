import * as types from './actionTypes';
import axios from 'axios';

export function loadProjectDetailSuccess(ProjectDetail) {
    return{type: types.LOAD_PROJECT_DETAIL_SUCCESS , ProjectDetail}
}

export function addBidSuccess(addedBid , profileInfo) {
    const newAddedBid = Object.assign(addedBid, profileInfo);
    return{type: types.ADD_BID_SUCCESS , newAddedBid}
}
export function deleteBidSuccess(Success) {
    debugger;
    return{type: types.DELETE_BID_SUCCESS , Success}
}

export function deleteBid(bidId) {
    return function (dispatch) {

        console.log(bidId);
        return axios.delete('/api/v1/projects/translation/bid/' ,{data: {bid_id : bidId}}).then(Success=>{
            dispatch(deleteBidSuccess(Success))
            }

        ).catch(err =>{
            throw (err)
        })
    }

}

export function addBidToProject(getStateX) {
    return function (dispatch , getState) {
        console.log('getState' , getStateX);
        const profileInfo = getState().profileInfo;
        return axios.post('/api/v1/projects/translation/bid/' , getStateX).then(addedBid =>{
            dispatch(addBidSuccess(addedBid , profileInfo))
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