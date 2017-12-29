import defaultState from "./initialState";
import {createStore} from 'redux';
import reducers from "../reducers/";

const store = createStore(reducers, defaultState);

export default store;

