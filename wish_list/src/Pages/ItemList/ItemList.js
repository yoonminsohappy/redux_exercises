import React from "react";
import Item from "../Item/Item";
import "./ItemList.scss";
import { useSelector } from "react-redux";
import { addToCart } from "../../store/actions";

// const ITEMS = [
//   { img: "images/cup.png", name: "퍼플마블", price: "21000" },
//   { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
//   { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
//   { img: "images/cup.png", name: "퍼플마블", price: "21000" },
//   { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
//   { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
//   { img: "images/cup.png", name: "퍼플마블", price: "21000" },
//   { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
//   { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
// ];

const ItemList = () => {
  const ITEM = useSelector((store) => store.cartReducer);
  const itemList = ITEM.map((item, i) => (
    <Item item={item} key={i} addToCart={() => addToCart(item)} />
  ));
  return (
    <div className="ItemList">
      <h1 className="header">hi, there</h1>
      <div className="rowsContainer">{itemList}</div>
    </div>
  );
};

export default ItemList;
