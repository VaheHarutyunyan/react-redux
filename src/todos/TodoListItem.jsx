import React from "react";
import { useDispatch } from "react-redux";
import {
  actionCheckedTodo,
  actionDeleteTodo,
} from "../store/action-creator/action-creator";

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const onChangeChecked = (item) => {
    dispatch(actionCheckedTodo({ item: item }));
  };
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            onChangeChecked({ ...todo, completed: !todo.completed })
          }
        />
        <span>{todo.title}</span>
        <button
          onClick={() => {
            dispatch(actionDeleteTodo({ id: todo.id }));
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
