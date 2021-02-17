import React, { useState, useEffect } from "react";

// props.age = 12
const FirstComp = (props) => {
  const [age, setAge] = useState(16);

  const handleClick = () => {
    setAge((oldAge) => {
      return oldAge + 1;
    });
  };

  useEffect(() => {
    console.log(age);
  }, [age]);

  // standing => props.standing
  // hello => props.hello
  // name => props.name
  //   props.age = props.age + 1;

  return (
    <div>
      <div>My age is {age}</div>
      <button type="button" onClick={handleClick}>
        Update my Age
      </button>
      {age >= 18 && <div>You are now an adult</div>}
    </div>
  );
};

export default FirstComp;
