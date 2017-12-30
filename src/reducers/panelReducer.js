import {ADD_COUNTER} from "../actions/actionTypes";
import defaultState from "../store/initialState";

export const panelReducer = (state = defaultState, actions)=>{
    switch (actions.type){
        case ADD_COUNTER:
            const count = state.count + 1;
            return Object.assign({}, state, {
                count: count
            });
        default:
            return state;
    }
};