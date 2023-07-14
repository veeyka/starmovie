import actionTypes from "../actions/actionTypes";

const initialState = {
  userId:0,
  email:"",
  userRequestToken:"",
  hasCredition:false,
}

const UserReducer = (state: TUserState = initialState, action: TUserAction): TUserState => {
    console.log("user reducer" + state , action)
    switch (action.type) {
      case actionTypes.SET_USER_DATA:
        return {
          ...state,
          userId: 1,
          email:"",
          userRequestToken:"",
          hasCredition:false
        };
        
      default: return state;
    }
    
  }
  
  export default UserReducer;