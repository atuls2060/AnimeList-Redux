import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  animeListReducer,
  animeDetailsReducer,
} from "./reducers/animeReducers";

const reducer = combineReducers({
  animeList: animeListReducer,
  animeDetails: animeDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
