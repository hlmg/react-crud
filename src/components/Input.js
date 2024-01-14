import React, { useEffect, useState } from "react";
import Button from "./Button";

const Input = ({ isEdit, onCreate, onEdit, item }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    onCreate(name, price);
    setName("");
    setPrice("");
  };

  const handleEdit = () => {
    onEdit(item.id, name, price);
    setName("");
    setPrice("");
  };

  useEffect(() => {
    setName(item.name);
    setPrice(item.price);
  }, [isEdit, item]);

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
      {isEdit ? (
        <Button content={"수정"} onClick={handleEdit} />
      ) : (
        <Button content={"제출"} onClick={handleSubmit} />
      )}
    </>
  );
};

export default Input;
