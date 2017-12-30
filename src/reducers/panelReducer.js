import {ADD_COUNTER} from "../actions/actionTypes";
import defaultState from "../store/initialState";

export const panelReducer = (state = defaultState, actions)=>{
    switch (actions.type){
        case ADD_COUNTER:
            state.counter += 1;
            return state;
        default:
            return state;
    }
};