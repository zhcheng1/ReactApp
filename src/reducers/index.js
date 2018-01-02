import {combineReducers} from "redux";
import {panelReducer} from "./panelReducer";
import {shareFareReducer} from "./shareFareReducer";
import {shareFareResultReducer} from "./shareFareResultReducer";

const rootReducer = combineReducers({
    panelReducer,
    shareFareReducer,
    shareFareResultReducer
});

export default rootReducer;