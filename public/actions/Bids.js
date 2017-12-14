import BidsApi from '../api/bids';
import * as types from './actionTypes';

export function loadBidsSuccess(Bids) {
    return{type: types.LOAD_BIDS_SUCCESS , Bids}
}

export function Bids(){
    return function(dispatch){
        return BidsApi.getAllInfo().then(Bids =>{
            dispatch(loadBidsSuccess(Bids));
        }).catch(error =>{
            throw (error);
        });
    };
}