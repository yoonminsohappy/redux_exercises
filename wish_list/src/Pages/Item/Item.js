import React from "react";
import "./Item.scss";

const Item = ({ img, name, price }) => {
  return (
    <div className="Item">
      <div className="frontContainer">
        <img src={img} alt="상품 이미지" className="itemImage"></img>
        <div className="bottomWrapper">
          <div className="itemInfo">
            <div className="itemName">{name}</div>
            <div className="itemPrice">{price}</div>
          </div>
          <img src="images/cart.png" alt="카트" className="cartIcon"></img>
        </div>
      </div>
    </div>
  );
};

export default Item;
