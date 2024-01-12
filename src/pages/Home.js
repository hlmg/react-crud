import React, { useState } from "react";
import Input from "../components/Input";
import ItemList from "../components/ItemList";
import Button from "../components/Button";

const dummyData = [
  { name: "식비", price: 7000 },
  { name: "교통비", price: 3600 },
  { name: "관리비", price: 30000 },
];

const Home = () => {
  const [expenditureItems, setExpenditureItems] = useState(dummyData);

  const onCreate = (name, price) => {
    console.log("start oncreate");
    console.log(name);
    console.log(price);

    setExpenditureItems([...expenditureItems, { name, price }]);
  };

  return (
    <div className={"Home"}>
      <h2>예산 계산기</h2>
      <div className={"content"}>
        <Input onCreate={onCreate} />

        <ItemList expenditureItems={expenditureItems} />
        <Button content={"목록 지우기"} />
      </div>
      <div className={"total-amount"}>
        <p>총지출:10600원</p>
      </div>
    </div>
  );
};

export default Home;
