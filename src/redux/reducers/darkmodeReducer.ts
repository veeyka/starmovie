import { ls } from "../../tools";
import actionTypes from "../actions/actionTypes";


const initialState: TDarkModeState= {
  mode:ls.get("SMovieDarkMode")
}

const DarkModeReducer = (state: TDarkModeState = initialState, action: TDarkModeAction): TDarkModeState => {
  console.log(action);
    switch (action.type) {
      case actionTypes.SET_DARK_MODE:
        return {
          mode: "dark",
        };

      case actionTypes.SET_LIGHT_MODE:
        return {
          mode: "light",
        };

      default: return state;
    }
  }
  
  export default DarkModeReducer;