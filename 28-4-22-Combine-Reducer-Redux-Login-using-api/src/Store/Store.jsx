import { legacy_createStore as createStore, combineReducers, applyMiddleware ,compose} from 'redux';
import Reducer from "../components/Reducer";
import { LOGIN } from "../components/Action";
import axios from "axios";


const rootReducer = combineReducers({
    Reducer
})

const middleware1 = (store) => (next) => (action) => {
    if (action.type === LOGIN) {
        axios.post('https://reqres.in/api/login', action.payload)
        .then(function (response) {
            console.log(response.data.token);
            store.getState().Reducer.token = response.data.token; 
            localStorage.setItem('token', response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    console.log("inside middleware1", action);
    next(action);
}


const allMiddlewares = [middleware1];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...allMiddlewares),
        // other store enhancers if any
      );
const store = createStore(rootReducer, enhancer);
export default store;

store.subscribe(() => {
    console.log(store.getState().Reducer)
})