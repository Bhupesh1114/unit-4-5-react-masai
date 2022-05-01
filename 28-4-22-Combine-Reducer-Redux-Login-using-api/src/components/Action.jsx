// Action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT"

// Action creators
export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}
export const logout = () => {
    return {
        type: LOGOUT,
    }
}

