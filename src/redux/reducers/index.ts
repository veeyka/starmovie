import { combineReducers } from "redux";
import DarkModeReducer from "./darkmodeReducer";
import UserReducer from "./userReducer";

const reducers = combineReducers({
    darkMode : DarkModeReducer,
    user:UserReducer
});

export default reducers;

export type RootStates = ReturnType<typeof reducers>