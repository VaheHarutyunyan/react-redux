import React from "react";
import TodoAdd from "./TodoAdd";
import TodoFilter from "./TodoFilter";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-container">
        <div className="todo-header">
          <div className="row">
            <div className="col">
              <TodoFilter />
            </div>
            <div className="col">
              <TodoAdd />
              
            </div>
          </div>
        </div>
        <div className="todo-body">
          <TodoList />
        </div>
        <div className="todo-footer">
          <div className="row">
            <TodoFooter />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
