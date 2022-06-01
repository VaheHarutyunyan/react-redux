import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETED_TODO,
  CHECKED_TODO,
  FILTER_TODO
} from "../action/action";

export const actionDeleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const actionAddTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const actionCheckedTodo = (payload) => ({
  type: CHECKED_TODO,
  payload,
});

export const actionCompletedTodo = (payload) => ({
  type: COMPLETED_TODO,
  payload,
});
export const actionFiltredTodo = (payload) => ({
  type: FILTER_TODO,
  payload,
});
