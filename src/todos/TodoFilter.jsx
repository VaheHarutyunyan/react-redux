import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterValue } from "../store/reducer/todos/todosFilterSlice";

const TodoFilter = () => {
  // const filterValue = useSelector(getFilterValue);
  const todosFilter = useSelector(getFilterValue);
  console.log(todosFilter);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={todosFilter.filter}
        onChange={(e) => {
          dispatch({
            type: "filter",
            payload: {
              filterValue: e.target.value,
            },
          });
        }}
      />
    </>
  );
};

export default TodoFilter;
