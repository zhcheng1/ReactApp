import {ADD_COUNTER} from "../actions/actionTypes";
import defaultState from "../store/initialState";

export const count = (state = defaultState, actions)=>{
    switch (actions.type){
        case ADD_COUNTER:
            debugger;
            state += 1;
            return state;
        default:
            return state;
    }
};