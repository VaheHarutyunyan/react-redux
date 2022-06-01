import React, { useState } from "react";
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
  const [value, setValue] = useState(todo.title);
  const [disabled, setDisabled] = useState(true);

  const onEdit = () => {
    setDisabled((e) => !e);
  };
  const onChangeTodoItem = (e) => {
    setValue(e.target.value);
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
        {/* <span>{todo.title}</span> */}
        <input
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => onChangeTodoItem(e)}
        />
        <button
          onClick={() => {
            dispatch(actionDeleteTodo({ id: todo.id }));
          }}
        >
          Delete
        </button>
        <button onClick={() => onEdit()}>{disabled ? "Edit" : "Save"}</button>
      </li>
    </>
  );
};

export default TodoListItem;
