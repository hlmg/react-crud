import React from "react";

const Item = ({ clickEditButton, onDelete, id, name, price }) => {
  return (
    <div className={"Item"}>
      <span>{name}</span>
      <span>{price}</span>
      <div>
        <button onClick={() => clickEditButton(id, name, price)}>수정</button>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
};

export default Item;
