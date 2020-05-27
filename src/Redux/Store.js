import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import UserReducer from "./User/UserReducer";
import HomePostReducer from "./HomePost/HomePostReducer"
import ProfileReducer from "./Profile/ProfileReducer"

const rootReducer = combineReducers({
  user: UserReducer,
  HomePost: HomePostReducer,
  profile: ProfileReducer,
});


const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;