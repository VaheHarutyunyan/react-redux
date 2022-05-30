import { initialTodos } from "./todosSlice";

export function todosFilterReducer(state = {}, action) {
  if (action.type === "filter") {
    return {
      filter: action.payload.filterValue,
      todos: state.todos.filter((item) => item.title.includes(state.filter)),
    };
  }
  return state;
}

export const initialTodosFilter = {
  filter: "",
  todos: initialTodos,
};
export function getFilterValue(state) {
  return state.todosFilter;
}
