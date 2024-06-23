import { useState } from "react";
import Users from "./Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Mad", lastName: "Max", age: 24 },
    { id: 2, firstName: "Hong", lastName: "Kong", age: 14 },
    { id: 3, firstName: "King", lastName: "Kong", age: 54 },
    { id: 4, firstName: "Poke", lastName: "Mon", age: 40 },
  ]);

  const IncreaseAge = (id) => {
    setUsers((prevStae) => {
      return prevStae.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };

  return (
    <>
      <>
        <h1>State Example</h1>
        <Users users={users} IncreaseAge={IncreaseAge} />
      </>
    </>
  );
}

export default App;
