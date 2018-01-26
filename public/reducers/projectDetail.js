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
            for(var i = 0 ; i < state[t-1].general.project_bids.length ; i ++){
                project_bids.project_bids[i] = state[t-1].general.project_bids[i]
            }
            project_bids.project_bids[i] = action.newAddedBid.data;
            project_bids.project_bids.length = (state[t-1].general.project_bids.length + 1);
            action.newAddedBid.data.uuid = action.newAddedBid.data.id;
            project_bids.project_bids[i].uuid = action.newAddedBid.data.id;
            project_bids.project_bids[i].freelancer.first_name = action.newAddedBid.first_name;
            project_bids.project_bids[i].freelancer.last_name = action.newAddedBid.last_name;
            // general.project_bids = project_bids ;

            return [...state, Object.assign({} , state[t-1] , {
                general : Object.assign({} , state[t-1].general , project_bids)
            })];
        case types.SELECT_BID_SUCCESS:
            return state;
        case types.DELETE_BID_SUCCESS:
            var project_bids2 = {
                project_bids: [],

            };
            var t2 = size(state);
            for(var y = 0 ; y < state[t2-1].general.project_bids.length ; y ++){
                project_bids2.project_bids[y] = state[t2-1].general.project_bids[y]
            }
            var obj = Object.values(state[t2-1].general.project_bids);
            console.log('TYPE', typeof state[t2-1].general.project_bids);
            console.log('state[t2-1].general.project_bids' , state[t2-1].general.project_bids);
            console.log(obj , 'obj');
            var z = Array.find(obj , (element) => element.uuid === action.Success.data.bid_id);
            console.log(z , 'z');
            var index = obj.findIndex(x => x.uuid === z.uuid);
            console.log('index' , index);
            console.log(project_bids2 , 'project_bids2');
            project_bids2.project_bids.splice(index , 1);
            console.log(index, 'index');
                return [...state, Object.assign({}, state[t2 - 1], {
                    general: Object.assign({}, state[t2 - 1].general, project_bids2)
                })];
        default :
            return state;
    }
}