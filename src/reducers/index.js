import {combineReducers} from "redux";
import {count} from "./panelReducer";

const rootReducer = combineReducers({
    count
});

export default rootReducer;