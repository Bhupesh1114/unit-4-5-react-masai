import * as ActionTypes from "./Login_Signup_Actions";

const initialState = {
    message: "",
    token: localStorage.getItem('token') || "",
}
const Login_Signup_Reducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.POST_DATA: 
            return {
                ...state,
                message: payload
            }
        case ActionTypes.POST_FOR_TOKEN:
            return {
                ...state,
                token: payload
            }
        case ActionTypes.LOG_OUT:
            return {
                ...state,
                token : payload
            }
        
        default:
            return state;
   }
}
export default Login_Signup_Reducer;