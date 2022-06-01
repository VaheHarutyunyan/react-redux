import {
  ADD_TODO,
  COMPLETED_TODO,
  DELETE_TODO,
  CHECKED_TODO,
  FILTER_TODO,
} from "../../action/action";

export const initialTodos = {
  list: [
    {
      id: 1,
      title: "delectus aut autem",
      completed: true,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: true,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ],
  filter: "",
};

export function todosReduser(state = initialTodos, action) {
  switch (action.type) {
    case DELETE_TODO:
      return {
        list: state.list.filter((item) => item.id !== action.payload.id),
      };
    case ADD_TODO:
      return {
        list: [
          ...state.list,
          {
            id: Math.random(),
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case CHECKED_TODO:
      return {
        list: state.list.map((todo) => {
          if (todo.id === action.payload.item.id) {
            return action.payload.item;
          }
          return todo;
        }),
      };
    case COMPLETED_TODO:
      return {
        list: state.list.filter((todo) => !todo.completed),
      };
    case FILTER_TODO:
      const filtredTodos = initialTodos.list.filter((item) =>
        item.title.includes(action.payload.filterValue)
      );
      return {
        filter: action.payload.filterValue,
        list: filtredTodos,
      };
    default:
      return state;
  }
}

export function getTodos(state) {
  return state.todos;
}
