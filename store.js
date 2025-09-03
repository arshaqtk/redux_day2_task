
import { createStore, combineReducers } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import { counterReducer, todoReducer } from "./reducers.js";


const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});


const store = createStore(rootReducer);

export default store;
