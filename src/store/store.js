import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialFriends, friendsReduser } from "./reducer/friends/friendsSlice";
import {
  initialTodosFilter,
  todosFilterReducer,
} from "./reducer/todos/todosFilterSlice";
import { initialTodos, todosReduser } from "./reducer/todos/todosSlice";
import { initialUsers, usersReduser } from "./reducer/users/usersSlice";

const store = createStore(
  combineReducers({
    friends: friendsReduser,
    todos: todosReduser,
    users: usersReduser,
    todosFilter: todosFilterReducer,
  }),
  {
    friends: initialFriends,
    todos: initialTodos,
    users: initialUsers,
    todosFilter: initialTodosFilter,
  },
  composeWithDevTools()
);

export default store;
