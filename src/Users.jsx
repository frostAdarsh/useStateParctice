import User from "./User";

const Users = ({ users,IncreaseAge }) => {
  return (
    <>
      {users.map((user) => (
        <User {...user} key={user.id}  IncreaseAge={IncreaseAge}/>
      ))}
    </>
  );
};

export default Users;
