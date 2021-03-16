import React from "react";
import "./CartFrame.scss";
import CartItem from "../CartItem/CartItem";

const ITEMS = [
  { img: "images/cup.png", name: "퍼플마블", price: "21000" },
  { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
  { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
  { img: "images/cup.png", name: "퍼플마블", price: "21000" },
  { img: "images/book.png", name: "달러구트 꿈 백화점", price: "13800" },
  { img: "images/chesnut-pie.jpeg", name: "밤파이", price: "8500" },
];

const CartFrame = () => {
  const orderedItem = ITEMS.map((item) => (
    <CartItem {...item} key={item.name} />
  ));
  return (
    <div className="CartFrame">
      <h1 className="title">Ordered</h1>
      <div className="itemWrapper">
        <div>{orderedItem}</div>
      </div>
      <div className="amountBox">
        <div className="total">total</div>
        <div className="totalAmount">50000</div>
        <div className="unit">원</div>
      </div>
    </div>
  );
};

export default CartFrame;
