
import { HttpClinet } from "../../service";
import actionTypes from "./actionTypes";
import { Dispatch } from 'redux';



export const setDarkMode = ()=>{
    return {type:actionTypes.SET_DARK_MODE}
};
export const setLightMode = ()=>({
    type:actionTypes.SET_LIGHT_MODE,
});
