import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../store/reducer/todos/todosSlice";

import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { list } = useSelector(getTodos);

  return (
    <div>
      <ul>
        {list.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
