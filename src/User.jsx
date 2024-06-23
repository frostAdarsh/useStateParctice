const User = ({ firstName, lastName, age, id ,IncreaseAge}) => {
  
  return (
    <div>
      <p>Fristname {firstName}</p>
      <p>Lastname {lastName}</p>
      <p>Age {age}</p>
      <p>Id {id}</p>

      <button
        onClick={() => {
          IncreaseAge(id);
        }}
      >
        Add age
      </button>
    </div>
  );
};

export default User;
