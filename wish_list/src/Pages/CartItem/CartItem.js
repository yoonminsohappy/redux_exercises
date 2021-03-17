import React from "react";
import "./CartItem.scss";
// import { useSelector } from "react-redux";

const CartItem = ({ img, name, price }) => {
  // const cartItems = useSelector((store) => store.cartReducer);

  return (
    <div className="CartItem">
      <input type="checkbox" className="checkBox" />
      <div className="imgWrapper">
        <img src={img} alt="장바구니 상품 이미지" className="img" />
      </div>
      <div className="name">{name}</div>
      <div className="controlQty">
        <div className="quantity">1</div>
        <button className="plusBtn">+</button>
        <button className="minusBtn">-</button>
      </div>
      <div className="price">{price}</div>
      <img src="images/delete.png" alt="삭제" className="deleteIcon"></img>
    </div>
  );
};

export default CartItem;
