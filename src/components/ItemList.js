import React from "react";
import Item from "./Item";

const ItemList = ({ clickEditButton, expenditureItems }) => {
  console.log(expenditureItems);
  return (
    <div className={"ItemList"}>
      {expenditureItems.map((item) => (
        <Item key={item.id} clickEditButton={clickEditButton} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
