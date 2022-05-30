import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getFilterValue } from "../store/reducer/todos/todosFilterSlice";
import { getTodos } from "../store/reducer/todos/todosSlice";

function useTodos() {
  const todos = useSelector(getTodos);
  const filterValue = useSelector(getFilterValue);
  const NEW_TODOS = useMemo(() => {
    return todos.filter((item) => item.title.includes(filterValue));
  }, [filterValue, todos]);

  return { NEW_TODOS, filterValue };
}

export default useTodos;
