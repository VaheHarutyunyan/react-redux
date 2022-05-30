export function usersReduser(state = {}, action) {
  if (action.type === "user") {
    return { name: action.payload.userName };
  }
  return state;
}

export const initialUsers = {
  name: "john bayden",
};

export function getUserName(state) {
  return state.users.name;
}
