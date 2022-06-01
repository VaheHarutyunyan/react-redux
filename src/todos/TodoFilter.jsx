import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFiltredTodo } from "../store/action-creator/action-creator";
import { getTodos } from "../store/reducer/todos/todosSlice";

const TodoFilter = () => {
  const { filter } = useSelector(getTodos);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={filter}
        onChange={(e) => {
          dispatch(actionFiltredTodo({ filterValue: e.target.value }));
        }}
      />
    </>
  );
};

export default TodoFilter;
