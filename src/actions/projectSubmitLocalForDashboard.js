import * as types from './actionTypes.js';


export function projectSubmitLocalForDashboard(NewPSLFD){
    return {type: types.PROJECT_SUBMIT_LOCAL_FOR_DASHBOARD , NewPSLFD}
}


export function PSLFD(NewPSLFD) {
    return function(dispatch){
        return NewPSLFD =>{dispatch(projectSubmitLocalForDashboard(NewPSLFD))}

    };
}