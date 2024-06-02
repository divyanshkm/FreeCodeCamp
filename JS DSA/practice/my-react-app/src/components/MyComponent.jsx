import React, { useState } from "react";

function MyComponent() {
  let [name, setName] = useState("guest");
  const [age, setAge] = useState(22);
  const [isEmployed, setIsEmployed] = useState(true);
  const updateName = () => {
    setName("Dev");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed?: {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleEmployedStatus}>check Employment</button>
    </div>
  );
}

export default MyComponent;
