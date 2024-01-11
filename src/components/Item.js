import React from "react";

const Item = () => {
  return (
    <div className={"Item"}>
      <span>식비</span>
      <span>7000</span>
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Item;
