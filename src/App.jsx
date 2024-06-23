import { useState } from "react";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Mad", lastName: "Max" },
    { id: 2, firstName: "Hong", lastName: "Kong" },
    { id: 3, firstName: "King", lastName: "Kong" },
    { id: 4, firstName: "Poke", lastName: "Mon" },
  ]);

  return (
    <>
      <>
        <h1>State Example</h1>
        <Users users={users} />
      </>
    </>
  );
}

export default App;
