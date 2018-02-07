import {combineReducers} from 'redux';
import profileInfo from './profileInfo.js';
import recomendedProject from './recomendedProject';
// import Notifications from './Notifications';
import projectSubmit from './projectSubmit';
import payLink from './payLink';
//import PSD from './projectSubmitLocalForDashboard';



const rootReducer = combineReducers({
  profileInfo , recomendedProject , payLink , projectSubmit
});

export default rootReducer ;
