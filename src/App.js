import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getUserName } from "./features/users/usersSlice";

function App() {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();
  return (
    <div className="App">
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
  );
}

export default App;
