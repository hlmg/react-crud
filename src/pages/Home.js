import React from "react";
import Input from "../components/Input";
import ItemList from "../components/ItemList";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className={"Home"}>
      <h2>예산 계산기</h2>
      <div className={"content"}>
        <Input />
        <Button content={"제출"} />
        <ItemList />
        <Button content={"목록 지우기"} />
      </div>
      <div className={"total-amount"}>
        <p>총지출:10600원</p>
      </div>
    </div>
  );
};

export default Home;
