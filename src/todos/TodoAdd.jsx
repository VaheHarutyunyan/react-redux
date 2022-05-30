import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddTodo } from "../store/action-creator/action-creator";
import { getTodos } from "../store/reducer/todos/todosSlice";

const TodoAdd = () => {
  const [addValue, setAddValue] = useState("");
  const todos = useSelector(getTodos);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const dispatch = useDispatch();
  const onAddTodo = () => {
    dispatch(actionAddTodo({ title: addValue }));
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add new todo"
        value={addValue}
        onChange={(e) => setAddValue(e.target.value)}
      />
      <button onClick={() => onAddTodo()}>Add</button>
    </>
  );
};

export default TodoAdd;
