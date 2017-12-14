import Bids from './BidsReducer';
import {combineReducers} from 'redux';
import ProjectsDone from './ProjectsDoneReducer'

const rootReducer = combineReducers({
    Bids , ProjectsDone
});

export default rootReducer ;

