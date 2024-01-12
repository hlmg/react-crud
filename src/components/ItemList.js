import React from "react";
import Item from "./Item";

const ItemList = ({ expenditureItems }) => {
  console.log(expenditureItems);
  return (
    <div className={"ItemList"}>
      {expenditureItems.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
