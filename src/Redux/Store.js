import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import UserReducer from "./User/UserReducer";
import PostReducer from "./Post/PostReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  post: PostReducer,
});

const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
