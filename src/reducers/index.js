import {combineReducers} from 'redux';
import profileInfo from './profileInfo.js';
import recomendedProject from './recomendedProject';
import Notifications from './Notifications';

const rootReducer = combineReducers({
  profileInfo , recomendedProject , Notifications
});

export default rootReducer ;
