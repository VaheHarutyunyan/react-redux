import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getFriends } from "./store/reducer/friends/friendsSlice";
import { getUsers } from "./store/reducer/users/usersSlice";
import Todo from "./todos/Todo";

function App() {
  const { name } = useSelector(getUsers);
  const friends = useSelector(getFriends);
  console.log(friends);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <Todo />
      </div>
      <div>
        <p> {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            dispatch({
              type: "user",
              payload: {
                name: e.target.value,
              },
            });
          }}
        />
      </div>
    </div>
  );
}

export default App;
