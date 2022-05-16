import axios from "axios";
// Action types
export const POST_DATA = "POST_DATA";
export const POST_FOR_TOKEN = "POST_FOR_TOKEN";
export const LOG_OUT = "LOG_OUT";

// Action Creators

export const postData = (payload, value) => (dispatch) => {
  console.log(payload);
  axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/${value}`, payload)
    .then(function (response) {
      if (response.data.message) {
        console.log(response.data.message);
        dispatch({ type: POST_DATA, payload: response.data.message });
      } else if (response.data.token) {
        console.log(response.data.token);
        dispatch({ type: POST_FOR_TOKEN, payload: response.data.token });
        localStorage.setItem("token", response.data.token);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT, payload: "" });
  localStorage.removeItem("token");
};
