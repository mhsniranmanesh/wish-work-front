import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function projectDetail(state= initialState.projectDetail  , action) {
    switch (action.type) {
        case types.LOAD_PROJECT_DETAIL_SUCCESS:
            return [...state , Object.assign({} , action.ProjectDetail.data)];
        case types.ADD_BID_SUCCESS:
            var project_bids = {
                project_bids: {
                    length: 0,
                    freelancer: [],
                },

            };
            for(var i = 0 ; i < state[0].project_bids.length ; i ++){
                project_bids.project_bids[i] = state[0].project_bids[i]
            }
            project_bids.project_bids[i] = action.addedBid.data;
            project_bids.project_bids.length = (state[0].project_bids.length + 1);
            action.addedBid.data.uuid = action.addedBid.data.id;
            project_bids.project_bids[i].freelancer = initialState.profileInfo.first_name;
            debugger;
            return [...state , Object.assign({} ,state[0] , project_bids)];
        default :
            return state;
    }
}