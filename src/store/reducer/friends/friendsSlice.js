export function friendsReduser(state = [], action) {
  if (action.type === "friend") {
    // console.log(state);
  }
  return state;
}

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
