import {combineReducers} from "redux";
import {panelReducer} from "./panelReducer";
import { shareFareReducer } from "./shareFareReducer";

const rootReducer = combineReducers({
    panelReducer,
    shareFareReducer
});

export default rootReducer;