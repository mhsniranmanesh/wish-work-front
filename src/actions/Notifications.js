import NotificationsApi from '../api/notif_freelancer';
import * as types from './actionTypes';
import axios from 'axios';

export function loadNotifSuccess(Notifications) {
    return{type: types.LOAD_NOTIF_SUCCESS , Notifications}
}

export function Notifications(){
    return function(dispatch){
        return NotificationsApi.getAllInfo().then(Notifications =>{
            dispatch(loadNotifSuccess(Notifications));
        }).catch(error =>{
            throw (error);
        });
    };
}

// export function Notifications(){
//     return function(dispatch){
//         return NotificationsApi.axios.get('/api/freelancer').then(Notifications =>{
//             dispatch(loadNotifSuccess(Notifications));
//         }).catch(error =>{
//             throw (error);
//         });
//     };
// }