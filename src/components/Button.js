import React from "react";

const Button = ({ content, onClick }) => {
  return (
    <div className={"Button"}>
      <button onClick={onClick}>{content}</button>
    </div>
  );
};

export default Button;
