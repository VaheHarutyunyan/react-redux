import { combineReducers, createStore } from "redux";
import {
  initialFriends,
  friendsReduser,
} from "../features/friends/friendsSlice";
import { initialTodos, todosReduser } from "../features/todos/todosSlice";
import { initialUsers, usersReduser } from "../features/users/usersSlice";

const store = createStore(
  combineReducers({
    friends: friendsReduser,
    todos: todosReduser,
    users: usersReduser,
  }),
  {
    friends: initialFriends,
    todos: initialTodos,
    users: initialUsers,
  }
);

export default store;
