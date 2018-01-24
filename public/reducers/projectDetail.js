import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

function size (obj) {
    let x = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) x++;
    }
    return x;
}
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
            var t = size(state);
            for(var i = 0 ; i < state[0].general.project_bids.length ; i ++){
                project_bids.project_bids[i] = state[0].general.project_bids[i]
            }
            project_bids.project_bids[i] = action.newAddedBid.data;
            project_bids.project_bids.length = (state[0].general.project_bids.length + 1);
            action.newAddedBid.data.uuid = action.newAddedBid.data.id;
            project_bids.project_bids[i].freelancer.first_name = action.newAddedBid.first_name;
            project_bids.project_bids[i].freelancer.last_name = action.newAddedBid.last_name;
            // general.project_bids = project_bids ;

            return [...state, Object.assign({} , state[t-1] , {
                general : Object.assign({} , state[t-1].general , project_bids)
            })];
        case types.SELECT_BID_SUCCESS:
            return state;
        case types.DELETE_BID_SUCCESS:
            var t2 = size(state);
            var index = state[t2-1].general.project_bids.indexOf(action.Success.data.bid_id);
            debugger;
                return [...state, Object.assign({}, state[t2 - 1], {
                    general: Object.assign({}, state[t2 - 1].general, {
                        project_bids: Object.assign({}, state[t2 - 1], general.project_bids.splice(index, 1))
                    })
                })];
        default :
            return state;
    }
}