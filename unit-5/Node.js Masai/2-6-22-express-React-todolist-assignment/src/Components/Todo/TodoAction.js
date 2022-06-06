import axios from "axios";
// Action type
export const ADD_TODO = "ADD_TODO";
export const GET_TODOS = "GET_TODOS";


// Action creator


export const getTodos = () => (dispatch) => {
  console.log("getTodos")
  axios.get("http://localhost:8080")
    .then((response) => {
      console.log(response.data.todos);
      dispatch({type:GET_TODOS , payload:response.data.todos})
    })
    .catch(error => {
      console.log("error", error);
  })
}

export const addTodo = (payload) => (dispatch) => {
  console.log(payload)
  axios.post("http://localhost:8080", payload)
    .then(response => {
      console.log(response);
      dispatch(getTodos())
    })
  .catch(error => console.error(error))
};

export const deleteTodo = (id) => (dispatch) => {
  axios.delete(`http://localhost:8080/${id}`)
    .then(response => {
      console.log(response);
      dispatch(getTodos());
    })
  .catch(error => console.log(error))
}

