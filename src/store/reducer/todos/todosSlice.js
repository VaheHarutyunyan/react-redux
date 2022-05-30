import {
  ADD_TODO,
  COMPLETED_TODO,
  DELETE_TODO,
  CHECKED_TODO,
} from "../../action/action";

export function todosReduser(state = [], action) {
  switch (action.type) {
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case ADD_TODO:
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          completed: false,
        },
      ];
    case CHECKED_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.item.id) {
          return action.payload.item;
        }
        return todo;
      });
    case COMPLETED_TODO:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
}

export const initialTodos = [
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
];

export function getTodos(state) {
  return state.todos;
}
