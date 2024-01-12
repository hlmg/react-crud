import React, { useState } from "react";
import Button from "./Button";

const Input = ({ onCreate }) => {
  console.log(onCreate);
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const handleSubmit = () => {
    onCreate(name, price);
    setName("");
    setPrice("");
  };

  return (
    <>
      <div className={"Input"}>
        <div>
          지출 항목
          <input
            type={"text"}
            placeholder={"예) 렌트비"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          비용
          <input
            type={"text"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <Button content={"제출"} onClick={handleSubmit} />
    </>
  );
};

export default Input;
