import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import booksReducer from "./reducer";

const store = legacy_createStore(
  booksReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
