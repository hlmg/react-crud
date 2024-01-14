import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import ItemList from "../components/ItemList";
import Button from "../components/Button";

const dummyData = [
  { id: 0, name: "식비", price: 7000 },
  { id: 1, name: "교통비", price: 3600 },
  { id: 2, name: "관리비", price: 30000 },
];

const Home = () => {
  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [expenditureItems, setExpenditureItems] = useState(dummyData);
  const sequence = useRef(dummyData.length);
  const [isEdit, setEdit] = useState(false);

  const onCreate = (name, price) => {
    const id = sequence.current;
    setExpenditureItems([...expenditureItems, { id, name, price }]);
    sequence.current += 1;
  };

  const onDelete = (id) => {
    const items = expenditureItems.filter((item) => item.id !== id);
    setExpenditureItems(items);
  };

  const deleteAll = () => {
    setExpenditureItems([]);
  };

  const onEdit = (id, name, price) => {
    const items = expenditureItems.map((it) =>
      it.id === id ? (it = { id: id, name: name, price: price }) : it,
    );
    setExpenditureItems(items);
    setEdit(!isEdit);
    setItem({ id: "", name: "", price: "" });
  };

  const clickEditButton = (id, name, price) => {
    setItem({ id, name, price });
    setEdit(!isEdit);
  };

  useEffect(() => {}, []);

  return (
    <div className={"Home"}>
      <h2>예산 계산기</h2>
      <div className={"content"}>
        <Input
          isEdit={isEdit}
          onCreate={onCreate}
          onEdit={onEdit}
          item={item}
        />
        <ItemList
          onDelete={onDelete}
          clickEditButton={clickEditButton}
          expenditureItems={expenditureItems}
        />
        <Button onClick={deleteAll} content={"목록 지우기"} />
      </div>
      <div className={"total-amount"}>
        <p>총지출:10600원</p>
      </div>
    </div>
  );
};

export default Home;
