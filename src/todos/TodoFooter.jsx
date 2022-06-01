import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCompletedTodo } from "../store/action-creator/action-creator";
import { getTodos } from "../store/reducer/todos/todosSlice";

const TodoFooter = () => {
  const { list } = useSelector(getTodos);
  const dispatch = useDispatch();
  const isCompleted = useMemo(() => {
    return list.filter((todo) => todo.completed);
  }, [list]);

  return (
    <>
      <div className="col">
        {isCompleted.length}/{list.length} Comleted
      </div>
      <div className="col">
        <button
          onClick={() => {
            dispatch(actionCompletedTodo());
          }}
        >
          Clear completed
        </button>
      </div>
    </>
  );
};

export default TodoFooter;
