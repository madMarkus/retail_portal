import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

//This is needed for the redux dev toold in chrome to work properly
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;
