import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import UserReducer from "./UserReducer";

const UserStore = createStore(
  UserReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default UserStore;