import * as actions from "../actions";
import defaultState from "../store/initialState";

export default function counterReducer(state = defaultState, actions){
    switch (actions.type){
        case "ADD_COUNTER":
            state.counter = state.counter+1;
            state.lastPageClicked = actions.payload;
            return state;
    }
}