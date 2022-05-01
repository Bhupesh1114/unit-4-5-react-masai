import { LOGIN } from "./Action";

const localToken = localStorage.getItem('token') || ""; 
const initialState = { token: localToken };
const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return { 
               token: payload
            }
            default: return state
  }
}

export default Reducer;

