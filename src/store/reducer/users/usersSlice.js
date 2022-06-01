export const initialUsers = {
  name: "john bayden",
};

export function usersReduser(state = initialUsers, action) {
  if (action.type === "user") {
    return { name: action.payload.name };
  }
  return state;
}

export function getUsers(state) {
  return state.users;
}
