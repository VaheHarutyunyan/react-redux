import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { friendsReduser } from "./reducer/friends/friendsSlice";
import { todosReduser } from "./reducer/todos/todosSlice";
import { usersReduser } from "./reducer/users/usersSlice";

const rootReducer = combineReducers({
  friends: friendsReduser,
  todos: todosReduser,
  users: usersReduser,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
