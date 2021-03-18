import React, { useEffect } from "react";
import "./CartItem.scss";
import { useSelector } from "react-redux";

const CartItem = ({ item }) => {
  // const cartItems = useSelector((store) => store.cartReducer);
  // useEffect(() => {
  //   console.log("cartitemmm", { cartItems });
  // });

  return (
    <div className="CartItem">
      <input type="checkbox" className="checkBox" />
      <div className="imgWrapper">
        <img src={item.img} alt="장바구니 상품 이미지" className="img" />
      </div>
      <div className="name">{item.name}</div>
      <div className="controlQty">
        <div className="quantity">1</div>
        <button className="plusBtn">+</button>
        <button className="minusBtn">-</button>
      </div>
      <div className="price">{item.price}원</div>
      <img src="images/delete.png" alt="삭제" className="deleteIcon"></img>
    </div>
  );
};

export default CartItem;
