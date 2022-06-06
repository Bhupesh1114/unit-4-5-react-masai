// Import Action Types
import { GET_TODOS} from "./TodoAction";

const initstate = {
  allTodos: [],
};

const TodoReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_TODOS: 
      return {
        ...state,
        allTodos : payload
      }
    default:
      return state;
  }
};

export default TodoReducer;
