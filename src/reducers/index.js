import {combineReducers} from 'redux';
import profileInfo from './profileInfo.js';
import recomendedProject from './recomendedProject';
const rootReducer = combineReducers({
  profileInfo , recomendedProject
});

export default rootReducer ;
