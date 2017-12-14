import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';
import  createLogger  from 'redux-logger';

export default function configureStore(initialState){
  return createStore(
    rootReducer ,
    initialState,
    applyMiddleware(thunk ,reduxImmutableStateInvariant() , createLogger)
  );
}
