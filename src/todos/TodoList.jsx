import React from "react";
import { useSelector } from "react-redux";
import { getFilterValue } from "../store/reducer/todos/todosFilterSlice";
// import { getTodos } from "../store/reducer/todos/todosSlice";

import TodoListItem from "./TodoListItem";

const TodoList = () => {
  // const todos = useSelector(getTodos);
  const todosFilter = useSelector(getFilterValue);
  console.log(todosFilter);

  // const TODOS_LIST = useMemo(() => {
  //   return todos.filter((todo) => todo.title.includes(filter));
  // }, [filter, todos]);

  return (
    <div>
      <ul>
        {todosFilter.todos.map((todo, index) => (
          <TodoListItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
