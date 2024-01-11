import React from "react";

const Input = () => {
  return (
    <div className={"Input"}>
      <div>
        지출 항목
        <input type={"text"} placeholder={"예) 렌트비"} />
      </div>
      <div>
        비용
        <input type={"text"} />
      </div>
    </div>
  );
};

export default Input;
