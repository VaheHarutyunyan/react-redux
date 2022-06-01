export const initialFriends = [
  {
    id: 1,
    name: "John Smith",
  },
  {
    id: 2,
    name: "Angela Merkel",
  },
];

export function friendsReduser(state = initialFriends, action) {
  if (action.type === "friend") {
    return;
  }
  return state;
}
export function getFriends(state) {
  return state.friends;
}
