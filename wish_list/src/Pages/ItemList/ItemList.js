import React from "react";
import Item from "../Item/Item";
import "./ItemList.scss";

const ITEMS = [
  { img: "images/cup.png", name: "퍼플마블", price: "21000" },
  { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
  { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
  { img: "images/cup.png", name: "퍼플마블", price: "21000" },
  { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
  { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
  { img: "images/cup.png", name: "퍼플마블", price: "21000" },
  { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
  { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
];

const ItemList = () => {
  const itemList = ITEMS.map((item) => <Item {...item} key={item.name} />);
  return (
    <div className="ItemList">
      <h1 className="header">hi, there</h1>
      <div className="rowsContainer">{itemList}</div>
    </div>
  );
};

export default ItemList;
