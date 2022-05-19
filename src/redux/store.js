import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./indexReducers";

const store = createStore(reducers, {}, composeWithDevTools());

export default store;
