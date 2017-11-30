import {combineReducers} from 'redux';
import profileInfo from './profileInfo.js';
import recomendedProject from './recomendedProject';
import Notifications from './Notifications';
import projectSubmit from './projectSubmit';
import PSLFD from './projectSubmitLocalForDashboard';



const rootReducer = combineReducers({
  profileInfo , recomendedProject , Notifications , projectSubmit , PSLFD
});

export default rootReducer ;
