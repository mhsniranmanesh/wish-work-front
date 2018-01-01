import {combineReducers} from 'redux';
import ProjectsDone from './ProjectsDoneReducer'
import profileInfo from './ProfileInfo';
import projectDetail from './projectDetail';
import freelancerDetail from './freelancerDetail';

const rootReducer = combineReducers({
   ProjectsDone , profileInfo , projectDetail , freelancerDetail
});

export default rootReducer ;

