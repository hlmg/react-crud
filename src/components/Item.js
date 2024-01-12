import React from "react";

const Item = ({ name, price }) => {
  return (
    <div className={"Item"}>
      <span>{name}</span>
      <span>{price}</span>
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Item;
