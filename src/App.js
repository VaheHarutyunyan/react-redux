import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getUserName } from "./store/reducer/users/usersSlice";
import Todo from "./todos/Todo";

function App() {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <Todo />
      </div>
      <div>
        <p> {userName}</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            dispatch({
              type: "user",
              payload: {
                userName: e.target.value,
              },
            });
          }}
        />
      </div>
    </div>
  );
}

export default App;
